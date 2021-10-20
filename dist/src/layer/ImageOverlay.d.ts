import { Object, ReturnType } from "typescript";
import { Point } from "../geometry";
import { GeoJSONFunction } from "./GeoJSONFunction";
declare type StringReturnType = ReturnType<typeof Point.prototype.toString> | string | ReturnType<typeof Object.String>;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
declare type GeoJSONReturnType = ReturnType<typeof GeoJSONFunction>;
export declare const ImageOverlay: GeoJSONReturnType;
export declare const imageOverlay: (url: StringReturnType, bounds: any, options: NumberReturnType) => any;
export {};
