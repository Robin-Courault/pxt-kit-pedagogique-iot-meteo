/**
 * Organize your blocks in groups
 */

function degToRad(degrees: number) : number {
    return degrees * (Math.PI / 180);
}

//% color="#FFB53D" icon="\uf2ce" weight=110
//% groups="['Pressure','GPS','LoRa']"
namespace inputSeed {
    /**
     * ===== Blocks de pression =====
     */

    //% block="set the max pressure"
    //% group="Pressure"
    export function setPressureRange(): void {
        // TODO : 
    }

    //% block="retrieve current Pressure in Pa (Pascal)"
    //% group="Pressure"
    export function pressure(): number {
        // TODO : retrieve pressure
        return 0;
    }

    /**
     * ===== Blocks de localisation =====
     */

    export enum locationType {
        //% block="Longitude"
        locationLon,
        //% block="Latitude"
        locationLat
    }

    const GPS_ADDRESS = 0x10;
    let trameBuffer : string = "";
    /**
     * Reads 32 bytes from the GPS via I2C
     */
    function readRawData(): string {
        let result = "";
        try {
            // Reading bytes from the module
            let data = pins.i2cReadBuffer(GPS_ADDRESS, 32, false);

            for (let i = 0; i < data.length; i++) {
                let charCode = data.getNumber(NumberFormat.UInt8LE, i);
                // Filter valid characters (printable ASCII)
                if (charCode >= 32 && charCode <= 126) {
                    result += String.fromCharCode(charCode);
                } 
                // CR + LF
                else if (charCode === 13 || charCode === 10) {
                    result += "\n";
                }
            }
        } catch (e) {
            result = "";
        }
        return result;
    }

    export function getAllTrames(): string[] {
        let raw = readRawData();
        if (raw.length === 0) return [];

        trameBuffer += raw;

        // Processing complete sentences
        let lines = trameBuffer.split("\n");

        // Keep the last incomplete line in the buffer
        trameBuffer = lines[lines.length - 1];

        return lines;
    }

    const GGA_LAT_POS = 2;
    const GGA_LON_POS = 4;
    const GGA_FIX_GPS_POS = 6;
    /**
     * @param trame GGA sentence split by ',' without the checksum part
     * @returns null if trame is empty, or if trame is not GGA type, or if no GPS fix, otherwise Location with coordinates from the read trame
     */
    export function parseTrameGGA(trame : string[]): Location | null {
        // GP = GPS | GN = GPS + GLONASS
        if (trame[0] == "$GPGGA" || trame[0] == "$GNGGA") {
            // if FIXGPS (= positioning type) = 0 then no position fix,
            // we would prefer GPS (=1) but fundamentally any fix is acceptable
            if (parseFloat(trame[GGA_FIX_GPS_POS]) > 0) {
                let lat = nmeaToDegrees(trame[GGA_LAT_POS], trame[GGA_LAT_POS+1]);
                let lon = nmeaToDegrees(trame[GGA_LON_POS], trame[GGA_LON_POS+1]);

                return new Location(lat, lon);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    const MTK_INIT_CMD = "$PMTK314,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29\r\n";
    let isStarted : boolean = false;
    /**
     * Checks if the trame is of MTK type and if it's a startup type,
     * If so, initializes the module to transmit GGA sentences.
     * @param trame MTK sentence split by ',' without the checksum part
     * @returns true if trame is MTK, false otherwise
     */
    export function checkTrameMTK(trame : string[]): boolean {
        if (trame[0].substr(0,5) == "$PMTK") {
            switch (trame[0].substr(5)) {
                case "010": // sys_msg
                    // msg = startup ended
                    if (trame[1] == "002" && !isStarted) {
                        // setup GGA sentence transmission
                        let buf = pins.createBuffer(MTK_INIT_CMD.length);
                        for (let i = 0; i < MTK_INIT_CMD.length; i++) {
                            buf.setNumber(NumberFormat.UInt8LE, i, MTK_INIT_CMD.charCodeAt(i));
                        }
                        pins.i2cWriteBuffer(GPS_ADDRESS, buf, false);
                        isStarted = true;
                    }
                    break;
                case "001": // ack
                    // we don't handle the initialization acknowledgment
                    if (trame[1] == "314" && trame[2] == "3") {}
                default:
                    break;
            }
            return true;
        } else {
            return false;
        }
    }

    function nmeaToDegrees(raw: string, direction: string): number {
        if (raw.length === 0) return 0;

        let dotIndex = raw.indexOf(".");
        if (dotIndex < 2) return 0;

        // For a string like "4836.5375":
        // The 2 digits before the dot and the digits after represent minutes (here 36.5375 min)
        // The other digits represent degrees (here 48°)
        let degStr = raw.substr(0, dotIndex - 2);
        let minStr = raw.substr(dotIndex - 2);

        let degrees = parseFloat(degStr);
        let minutes = parseFloat(minStr);

        // Convert degrees + minutes to decimal degrees (latitude or longitude)
        // 1 minute = 1/60 degrees
        let result = degrees + minutes / 60.0;

        if (direction === "S" || direction === "W") {
            result = -result;
        }
        return result;
    }

    export class Location {
        latDeg: number; // in degrees
        lonDeg: number; // in degrees

        constructor(latitude : number, longitude : number) {
            this.latDeg = latitude;
            this.lonDeg = longitude;
        }

        /**
         * Get longitude or latitude of a Location.
         */
        //% block="get $typeVal of $this"
        //% group="GPS"
        //% this.defl=location
        getLocationElement(typeVal: locationType): number {
            if (typeVal === locationType.locationLat) {
                return this.latDeg;
            } else if (typeVal === locationType.locationLon) {
                return this.lonDeg;
            } else {
                return NaN;
            }
        }

        //Formula found on : https://gis.stackexchange.com/a/488625
        // Returns the equivalent flat coordinates (in 2D meters)
        // The y axis grows from south to north
        // The x axis grows from west to east
        toPoint2D(): map.Point2D {
            const lat_rad: number = degToRad(this.latDeg);

            const x_m: number = this.lonDeg * 111111 * Math.cos(lat_rad);
            const y_m: number = this.latDeg * 111111;

            return new map.Point2D(x_m, y_m);
        }
    }

    let lastLocation : Location = new Location(0,0);

    export function setLastLoc(loc : Location) {
        lastLocation = loc;
    }

    /**
     * Creates a Location, retrieve current GPS coords 
     * and automatically set it to a variable.
     */
    //% block="retrieve current location"
    //% blockSetVariable=location
    //% group="GPS"
    export function getLocation(): Location {
        let trames = inputSeed.getAllTrames();

        for (let i = 0; i < trames.length - 1; i++) {
            if (trames[i].trim().length > 0) {
                let parts = trames[i].trim().split('*')[0].split(',');
                let tempLoc = inputSeed.parseTrameGGA(parts);

                if (tempLoc != null) {
                    inputSeed.setLastLoc(tempLoc);
                } else {
                    inputSeed.checkTrameMTK(parts);
                }
            }
        }

        return lastLocation;
    }
}

//% color="#AA278D" icon="\uf279" weight=109
namespace map {
    export enum anchorPositionType {
        //% block="Centre"
        anchorCenter,
        //% block="Coin haut gauche"
        anchorTopLeft,
        //% block="Coin haut droit"
        anchorTopRight,
        //% block="Coin bas gauche"
        anchorBottomLeft,
        //% block="Coin bas droit"
        anchorBottomRight
    }

    export enum sizeUnitType {
        //% block="m"
        m,
        //% block="km"
        km
    }

    //% block="new Map centered on current location || and cells measuring $cellSize $sizeUnit"
    //% blockSetVariable=map
    //% inlineInputMode=external
    //% expandableArgumentMode="toggle"
    //% cellSize.defl=1
    export function newMap(cellSize : number, sizeUnit : sizeUnitType) {
        return new Map(cellSize, sizeUnit);
    }

    export class Map {
        anchor_m : Point2D; // in meters
        anchorPosition : anchorPositionType;
        cellSize_m : number; // in meters
        points : Point2D[];
        printSize : number = 5;
        pixelsToTurnOn : boolean[][];

        constructor(
            cellSize : number,
            sizeUnit : sizeUnitType
            ) {
                this.anchor_m = (inputSeed.getLocation()).toPoint2D();
                this.anchorPosition = anchorPositionType.anchorCenter;
                if (sizeUnit == sizeUnitType.m) {
                    // sets the size in meters
                    this.cellSize_m = cellSize;
                } else {
                    // converts the size to meters
                    this.cellSize_m = cellSize*1000;
                }
                this.points = [];
        }

        //% block="Set $anchor as anchor on $position for $this"
        //% this.defl=map
        setAnchor(anchor : inputSeed.Location, position : anchorPositionType) {
            this.anchor_m = anchor.toPoint2D();
            this.anchorPosition = position;
        }

        //% block="Move $anchor of $this of $nCellsAbscisse cellules in x and $nCellsOrdonnee cellules in y"
        //% this.defl=map
        moveAnchor(nCellsAbscisse : number, nCellsOrdonnee : number) {
            this.anchor_m.x += nCellsAbscisse*this.cellSize_m;
            this.anchor_m.y += nCellsOrdonnee*this.cellSize_m;
        }

        //% block="Set cell size of $this to $cellSize $sizeUnit"
        //% this.defl=map
        setCellSize(cellSize : number, sizeUnit : sizeUnitType) {
            this.cellSize_m = (sizeUnit == sizeUnitType.m) ? cellSize : cellSize*1000;
        }

        //% block="Add $location to $this"
        //% this.defl=map
        addLocation(location : inputSeed.Location) {
            this.points.push(location.toPoint2D());
        }

        //% block="print $this"
        //% this.defl=map
        print() {
            this.resetpixelsToTurnOn();
            let screenTop : number;
            let screenLeft : number;

            switch (this.anchorPosition) {
                case anchorPositionType.anchorTopLeft :
                    screenTop = this.anchor_m.y + (this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m/2);
                    this.pixelsToTurnOn[0][0] = true;
                    this.setPointsToTurnOn(screenTop,screenLeft);
                    break;
                case anchorPositionType.anchorTopRight :
                    screenTop = this.anchor_m.y + (this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    this.pixelsToTurnOn[0][this.printSize-1] = true; // last char
                    this.setPointsToTurnOn(screenTop,screenLeft);
                    break;
                case anchorPositionType.anchorCenter :
                    screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize/2 + this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize/2 + this.cellSize_m/2);
                    this.pixelsToTurnOn[this.printSize/2][this.printSize/2] = true; // mid char
                    this.setPointsToTurnOn(screenTop,screenLeft);
                    break;
                case anchorPositionType.anchorBottomLeft :
                    screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m/2);
                    this.pixelsToTurnOn[this.printSize-1][0] = true;
                    this.setPointsToTurnOn(screenTop,screenLeft);
                    break;
                case anchorPositionType.anchorBottomRight :
                    screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    this.pixelsToTurnOn[this.printSize-1][this.printSize-1] = true; // last char
                    this.setPointsToTurnOn(screenTop,screenLeft);
                    break;
            }
            
            basic.showLeds(this.convertPixelsToTurnOnInString());
        }

        //% block="Remove all locations in $this"
        //% this.defl=map
        clear() {
            this.points = [];
        }

        setPointsToTurnOn(limitTop : number, limitLeft : number) {
            this.points.forEach(p => {
                if (p.x >= limitLeft && p.x < limitLeft + this.printSize*this.cellSize_m 
                    && p.y <= limitTop && p.y > limitTop - this.printSize*this.cellSize_m) {
                    // parcours de toutes les lignes de la grille
                    for (let i = 1; i <= this.printSize; i++) {
                        let j : number;
                        // parcours de toutes les colonnes de la grille
                        for (j = 1; j <= this.printSize; j++) {
                            // case where cell is already true
                            if (this.pixelsToTurnOn[i-1][j-1]) {
                                break;
                            }
                            // case where p is in [i-1][j-1] cell
                            else if (p.x < limitLeft + j*this.cellSize_m && p.y > limitTop - i*this.cellSize_m) {
                                this.pixelsToTurnOn[i-1][j-1] = true;
                                break;
                            }
                        }

                        // case where break in prev (j) loop, p can't be in two cells
                        if (this.pixelsToTurnOn[i-1][j-1]) {
                            break;
                        }
                    }
                }
            });
        }

        convertPixelsToTurnOnInString() : string {
            let stringGrid = "";
            this.pixelsToTurnOn.forEach(l => {
                l.forEach(c => {
                    stringGrid = c ? stringGrid += '#' : stringGrid += '.';
                })
                stringGrid = stringGrid.concat("\n");
            });
            return stringGrid;
        }

        resetpixelsToTurnOn() {
            // réutilisation pour éviter de trop réserver de la mémoire
            if (this.pixelsToTurnOn && this.pixelsToTurnOn.length === this.printSize) {
                for (let i = 0; i < this.printSize; i++) {
                    for (let j = 0; j < this.printSize; j++) {
                        this.pixelsToTurnOn[i][j] = false;
                    }
                }
            } else {
                // Initialisation première fois
                this.pixelsToTurnOn = [];
                for (let i = 0; i < this.printSize; i++) {
                    this.pixelsToTurnOn.push([]);
                    for (let j = 0; j < this.printSize; j++) {
                        this.pixelsToTurnOn[i].push(false);
                    }
                }
            }
        }
    }

    export class Point2D {
        x : number;
        y : number;
        
        constructor(x : number, y : number) {
            this.x = x;
            this.y = y;
        }
    }
}
