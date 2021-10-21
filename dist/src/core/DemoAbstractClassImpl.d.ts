import { ReturnType } from "typescript";
import { GeoJSONClass } from "src/layer/GeoJSONClass";
import { GeoJSONFunction } from "src/layer/GeoJSONFunction";
import { Map } from '../Map';
declare type GeoJSONReturnType = ReturnType<typeof GeoJSONClass | typeof GeoJSONFunction>;
export declare type MapReturnType = ReturnType<typeof Map>;
export declare function extend(props: GeoJSONReturnType[]): {
    (): any;
    __super__: any;
    prototype: any;
};
export {};
