import { LatLngFunction } from "src/geo/LatLngFunction";
import { LatLngClass } from "src/geo/LatLngClass";
declare type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngClass> | ReturnType<typeof LatLngFunction.prototype.clone>;
export declare const Marker: any;
export declare function marker(latlng: LatLngReturnType, options: any): any;
export {};
