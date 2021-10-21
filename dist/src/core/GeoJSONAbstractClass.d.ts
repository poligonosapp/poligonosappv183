import { GeoJSONClass } from "src/layer/GeoJSONClass";
import { GeoJSONFunction } from "src/layer/GeoJSONFunction";
import { ReturnType } from "typescript";
declare type GeoJSONReturnType = ReturnType<typeof GeoJSONClass | typeof GeoJSONFunction>;
export declare abstract class GeoJSONAbstractClass {
    static options: GeoJSONReturnType[];
    static extend: GeoJSONReturnType;
    static include: GeoJSONReturnType;
    static initialize: GeoJSONReturnType;
}
export {};
