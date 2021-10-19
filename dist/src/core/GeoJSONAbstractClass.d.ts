import { GeoJSON } from '../layer';
import { ReturnType } from "typescript";
declare type GeoJSONReturnType = ReturnType<typeof GeoJSON>;
export declare abstract class GeoJSONAbstractClass {
    static options: GeoJSONReturnType;
    static extend: GeoJSONReturnType;
    static include: GeoJSONReturnType;
    static initialize: GeoJSONReturnType;
}
export {};
