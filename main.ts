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
     * Lit 32 octets depuis le GPS via I2C
     */
    function readRawData(): string {
        let result = "";
        try {
            // Lecture des octets depuis le module
            let data = pins.i2cReadBuffer(GPS_ADDRESS, 32, false);

            for (let i = 0; i < data.length; i++) {
                let charCode = data.getNumber(NumberFormat.UInt8LE, i);
                // Filtrer les caractères valides (ASCII imprimable)
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

        // Traitement des phrases complètes
        let lines = trameBuffer.split("\n");

        // Garder la dernière ligne incomplète dans le buffer
        trameBuffer = lines[lines.length - 1];

        return lines;
    }

    const GGA_LAT_POS = 2;
    const GGA_LON_POS = 4;
    const GGA_FIX_GPS_POS = 6;
    /**
     * @param trame trame GGA découpée sur les ',' et sans la partie checksum
     * @returns null si trame vide, ou si trame n'est pas de type GGA, ou si pas de fix GPS, sinon Location avec coordonnées de la trame lue
     */
    export function parseTrameGGA(trame : string[]): Location | null {
        // GP = GPS | GN = GPS + GLONASS
        if (trame[0] == "$GPGGA" || trame[0] == "$GNGGA") {
            basic.showNumber(8);
            basic.pause(100);
            basic.showNumber(0);
            // si FIXGPS (= type de positionnement) = 0 alors pas de fix de position,
            // on aimerait de préférence du GPS (=1) mais fondamentalement tant que c'est fixé, ça nous convient.
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
     * Check si la trame est de type MTK et si elle l'est si c'est un type startup,
     * Si c'est le cas, initialiser le module pour qu'il transmette les trames GGA.
     * Traitement de l'acquittement également de l'initialisation.
     * @param trame trame MTK découpée sur les ',' et sans la partie checksum
     * @returns true if trame is MTK, false otherwise
     */
    export function checkTrameMTK(trame : string[]): boolean {
        if (trame[0].substr(0,5) == "$PMTK") {
            switch (trame[0].substr(5)) {
                case "010": // sys_msg
                    // msg = startup ended
                    if (trame[1] == "002" && !isStarted) {
                        // setup de l'envoie des trames GGA
                        let buf = pins.createBuffer(MTK_INIT_CMD.length);
                        for (let i = 0; i < MTK_INIT_CMD.length; i++) {
                            buf.setNumber(NumberFormat.UInt8LE, i, MTK_INIT_CMD.charCodeAt(i));
                        }
                        pins.i2cWriteBuffer(GPS_ADDRESS, buf, false);
                        isStarted = true;
                    }
                    break;
                case "001": // ack
                    // on ne gère pas l'acquittement de notre initialisation
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

        // sur une chaine du type "4836.5375" :
        // les 2 chiffres avant le point et les chiffres après représentent les minutes (ici 36.5375 min)
        // les autres chiffres représentent les degrés (ici 48°)
        // => on ignore ce temps
        let degStr = raw.substr(0, dotIndex - 2);
        let minStr = raw.substr(dotIndex - 2);

        let degrees = parseFloat(degStr);
        let minutes = parseFloat(minStr);

        // conversion des degrés + minutes en degrés décimaux (latitude ou longitude)
        // 1 minute = 1/60 degrés
        let result = degrees + minutes / 60.0;

        if (direction === "S" || direction === "W") {
            result = -result;
        }
        return result;
    }

    /**
     * Creates a Location, retrieve current GPS coords 
     * and automatically set it to a variable.
     */
    //% block="retrieve current location"
    //% blockSetVariable=location
    //% group="GPS"
    export function getLocation(): Location {
        let trames : string[];
        let location : Location = new Location(0,0);
        let tempLoc : Location | null;
        
        trames = getAllTrames();

        for (let i = 0; i < trames.length - 1; i++) {
            if (trames[i].trim().length > 0) {
                // parse trame without checksum part (after '*')
                tempLoc = parseTrameGGA(trames[i].trim().split('*')[0].split(','));

                if (tempLoc != null) {
                    location = tempLoc;
                } else {
                    checkTrameMTK(trames[i].trim().split('*')[0].split(','));
                }
            }
        }

        return location;
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

        // Formula by Alex Punnen : https://gis.stackexchange.com/a/488625
        // Returns the equivalent flat coordinates (in 2D meters)
        toPoint2D(): map.Point2D {
            const lat_rad: number = degToRad(this.latDeg);

            const lat_m: number = (111132.92 - 559.82 * Math.cos(2 * lat_rad)
                + 1.175 * Math.cos(4*lat_rad) - 0.0023 * Math.cos(6*lat_rad));
            const long_m: number = (111412.84 * Math.cos(lat_rad) - 93.5 * Math.cos(3*lat_rad)
                + 0.118 * Math.cos(5*lat_rad));

            return new map.Point2D(long_m, lat_m);
        }
    }

    let lastLocation : Location = new Location(0,0);

    export function setLastLoc(loc : Location) {
        lastLocation = loc;
    }
}

loops.everyInterval(200, function () {
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
});

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
