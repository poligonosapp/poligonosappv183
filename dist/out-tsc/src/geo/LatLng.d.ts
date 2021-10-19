import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
declare type LatLngReturnType = ReturnType<typeof LatLng> | ReturnType<typeof LatLng.prototype.clone>;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare function LatLng(this: any, lat: NumberReturnType, lng: NumberReturnType, alt: NumberReturnType): void;
export declare function toLatLng(a: NumberReturnType, b: NumberReturnType, c: NumberReturnType): LatLngReturnType;
export {};
