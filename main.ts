/**
 * Organize your blocks in groups
 */

//% color="#FFB53D" icon="\uf2ce" weight=110
//% groups="['Pressure','GPS','Humidity','LoRa']"
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
        let loc = new Location();
        // TODO : fill loc when we can retrieve GPS coords
        return loc;
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

        degToRad(degrees : Number) : Number {
            return degrees * (Math.PI / 180);
        }

/*
Formula by Alex Punnen : https://gis.stackexchange.com/a/488625
meters_per_degree_lat = (111132.92 - 559.82 * np.cos(2 * lat0_rad) +
                             1.175 * np.cos(4 * lat0_rad) - 0.0023 * np.cos(6 * lat0_rad))

meters_per_degree_lon = (111412.84 * np.cos(lat0_rad) -
                            93.5 * np.cos(3 * lat0_rad) + 0.118 * np.cos(5 * lat0_rad))
*/
        // Returns the equivalent flat coordinates (in 2D meters)
        export toPoint2D(): Map.Point2D {
            lat_rad: Number = degToRad(lat);

            lat_m: Number = (111132.92 - 559.82 * Math.cos(2 * lat_rad)
                + 1.175 * Math.cos(4*lat_rad) - 0.0023 * Math.cos(6*lat_rad));
            long_m: Number = (111412.84 * Math.cos(lat_rad) - 93.5 * Math.cos(3*lat_rad)
                + 0.118 * Math.cos(5*lat_rad));

            return new Map.Point2D(long_m, lat_m);
        }
    }
}

//% color="#AA278D" icon="\uf279" weight=109
/* //% groups="['Pressure','GPS','Humidity','LoRa']" */
namespace Map {

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

    export class Map {
        anchor_m : Point2D; // in meters
        anchorPosition : anchorPositionType;
        cellSize_m : Number; // in meters
        points : Point2D[];

        //% block="create Map with $anchor on $position and cells measuring $cellSize $sizeUnit"
        export constructor(
            anchor : Location, 
            position : anchorPositionType,
            cellSize : number,
            sizeUnit : sizeUnitType
            ) {
            this.anchor_m = anchor.toPoint2D;
            this.anchorPosition = position;
            if (sizeUnit == sizeUnitType.m) {
                // sets the size in meters
                this.cellSize_m = cellSize;
            } else {
                // converts the size to meters
                this.cellSize_m = cellSize*1000;
            }
            points = [];
        }

        export setAnchor(anchor : Location, position : anchorPositionType) {
            this.anchor_m = anchor.toPoint2D;

        }

        export moveAnchor() {

        }

        export setCellSize() {

        }

        export addLocation() {
             
        }

        export print() {

        }

        export clear() {

        }

        export onMove() {

        }
    }

    export class Point2D {
        x : Number;
        y : Number;
        
        export constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

}

