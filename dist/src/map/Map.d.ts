import { ReturnType, HTMLElement } from 'typescript';
import { GeoJSONClass } from "src/layer/GeoJSONClass";
import { GeoJSONFunction } from "src/layer/GeoJSONFunction";
declare type GeoJSONReturnType = ReturnType<typeof GeoJSONClass | typeof GeoJSONFunction>;
declare type HTMLElementReturnType = ReturnType<typeof HTMLElement>;
export declare const Map: GeoJSONReturnType;
export declare function createMap(id: HTMLElementReturnType, options: any): any;
export {};
