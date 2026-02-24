/**
 * Organize your blocks in groups
 */

//% color="#AA278D"
//% groups="['Pressure','GPS','Humidity','LoRa']"
namespace inputSeed {
    export enum absLocation {
        //% block="Longitude" enumval=0
        Abs_Location_Lon,
        //% block="Latitude" enumval=1
        Abs_Location_Lat
    }

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
        getLocationElement(typeVal: absLocation): number {
            if (typeVal === absLocation.Abs_Location_Lat) {
                return this.lat;
            } else if (typeVal === absLocation.Abs_Location_Lon) {
                return this.lon;
            } else {
                return NaN;
            }
        }
    }
}