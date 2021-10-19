import { LatLng } from './LatLng';
import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
declare type LatLngReturnType = ReturnType<typeof LatLng>;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare function LatLngBounds(corner1: NumberReturnType, corner2: NumberReturnType): LatLngReturnType | LatLngReturnType[];
export declare function toLatLngBounds(a: LatLngReturnType, b: LatLngReturnType): any;
export {};
