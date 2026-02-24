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
        lon: number;
        lat: number;

        constructor() {
            this.lat = 0;
            this.lon = 0;
        }

        /**
         * Get longitude or latitude of a Location.
         */
        //% block="get $typeVal of $this"
        //% group="GPS"
        //% this.defl=location
        getLocationElement(typeVal: locationType): number {
            if (typeVal === locationType.locationLat) {
                return this.lat;
            } else if (typeVal === locationType.locationLon) {
                return this.lon;
            } else {
                return NaN;
            }
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
        anchor : Location;
        // TODO

        //% block="create Map with $anchor on $position and cells measuring $cellSize $sizeUnit"
        export constructor(
            anchor : Location, 
            position : anchorPositionType,
            cellSize : number,
            sizeUnit : sizeUnitType
            ) {
            this.anchor = anchor;
            // TODO : 1° = 111111m
        }
    }

}

