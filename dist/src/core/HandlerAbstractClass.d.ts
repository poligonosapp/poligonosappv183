import { GeoJSONAbstractClass } from "src/Leaflet";
import { GeoJSONReturnType } from "./HandlerFunction";
export declare abstract class HandlerAbstractClass extends GeoJSONAbstractClass {
    props: GeoJSONReturnType;
    constructor(props: GeoJSONReturnType);
}
