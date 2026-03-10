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

    /**
     * Creates a Location, retrieve current GPS coords 
     * and automatically set it to a variable.
     */
    //% block="retrieve current location"
    //% blockSetVariable=location
    //% group="GPS"
    export function getLocation(): Location {
        let location = new Location();
        // TODO : fill location when we can retrieve GPS coords
        return location;
    }

    export class Location {
        lat_deg: number; // in degrees
        lon_deg: number; // in degrees

        constructor() {
            this.lat_deg = 0;
            this.lon_deg = 0;
        }

        /**
         * Get longitude or latitude of a Location.
         */
        //% block="get $typeVal of $this"
        //% group="GPS"
        //% this.defl=location
        getLocationElement(typeVal: locationType): number {
            if (typeVal === locationType.locationLat) {
                return this.lat_deg;
            } else if (typeVal === locationType.locationLon) {
                return this.lon_deg;
            } else {
                return NaN;
            }
        }

        //Formula by Alex Punnen : https://gis.stackexchange.com/a/488625
        // Returns the equivalent flat coordinates (in 2D meters)
        toPoint2D(): map.Point2D {
            const lat_rad: number = degToRad(this.lat_deg);

            const lat_m: number = (111132.92 - 559.82 * Math.cos(2 * lat_rad)
                + 1.175 * Math.cos(4*lat_rad) - 0.0023 * Math.cos(6*lat_rad));
            const long_m: number = (111412.84 * Math.cos(lat_rad) - 93.5 * Math.cos(3*lat_rad)
                + 0.118 * Math.cos(5*lat_rad));

            return new map.Point2D(long_m, lat_m);
        }
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

        constructor(
            cellSize : number,
            sizeUnit : sizeUnitType
            ) {
                this.anchor_m = (new inputSeed.Location()).toPoint2D();
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
            let lines : boolean[][] = [];
            for (let i = 0; i < this.printSize; i++) {
                lines.push([]);
                for (let j = 0; j < this.printSize; j++) {
                    lines[i].push(false);
                }
            }
            let screenTop : number;
            let screenLeft : number;

            switch (this.anchorPosition) {
                case anchorPositionType.anchorTopLeft :
                    screenTop = this.anchor_m.y + (this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m/2);
                    lines[0][0] = true;
                    lines = this.getCellsOfPoints(screenTop,screenLeft,lines);
                    break;
                case anchorPositionType.anchorTopRight :
                    screenTop = this.anchor_m.y + (this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    lines[0][this.printSize-1] = true; // last char
                    lines = this.getCellsOfPoints(screenTop,screenLeft,lines);
                    break;
                case anchorPositionType.anchorCenter :
                    screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize/2 + this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize/2 + this.cellSize_m/2);
                    lines[this.printSize/2][this.printSize/2] = true; // mid char
                    lines = this.getCellsOfPoints(screenTop,screenLeft,lines);
                    break;
                case anchorPositionType.anchorBottomLeft :
                    screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m/2);
                    lines[this.printSize-1][0] = true;
                    lines = this.getCellsOfPoints(screenTop,screenLeft,lines);
                    break;
                case anchorPositionType.anchorBottomRight :
                    screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize + this.cellSize_m/2);
                    lines[this.printSize-1][this.printSize-1] = true; // last char
                    lines = this.getCellsOfPoints(screenTop,screenLeft,lines);
                    break;
            }
            
            basic.showLeds(this.convertCellsInString(lines));
        }

        //% block="Remove all locations in $this"
        //% this.defl=map
        clear() {
            this.points = [];
        }

        getCellsOfPoints(limitTop : number, limitLeft : number, grid : boolean[][]) : boolean[][] {
            this.points.forEach(p => {
                if (p.x >= limitLeft && p.x < limitLeft + this.printSize*this.cellSize_m 
                    && p.y <= limitTop && p.y > limitTop - this.printSize*this.cellSize_m) {
                    // parcours de toutes les lignes de la grille
                    for (let i = 1; i <= this.printSize; i++) {
                        let j : number;
                        // parcours de toutes les colonnes de la grille
                        for (j = 1; j <= this.printSize; j++) {
                            // case where cell is already true
                            if (grid[i-1][j-1]) {
                                break;
                            }
                            // case where p is in [i-1][j-1] cell
                            else if (p.x < limitLeft + j*this.cellSize_m && p.y > limitTop - i*this.cellSize_m) {
                                grid[i-1][j-1] = true;
                                break;
                            }
                        }

                        // case where break in prev (j) loop, p can't be in two cells
                        if (grid[i-1][j-1]) {
                            break;
                        }
                    }
                }
            });

            return grid;
        }

        convertCellsInString(grid : boolean[][]) : string {
            let stringGrid = "";
            grid.forEach(l => {
                l.forEach(c => {
                    stringGrid = c ? stringGrid.concat('#') : stringGrid.concat('.');
                })
                stringGrid = stringGrid.concat("\n");
            });
            return stringGrid;
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
