import { LatLngFunction } from './LatLngFunction';
import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
declare type LatLngReturnType = ReturnType<typeof LatLngFunction>;
declare type LatLngBoundsReturnType = ReturnType<typeof LatLngBounds>;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export interface Props {
    corner1: NumberReturnType | LatLngReturnType;
    corner2: NumberReturnType | LatLngReturnType;
}
export declare function LatLngBounds(corner1: NumberReturnType | LatLngReturnType, corner2: NumberReturnType | LatLngReturnType): LatLngReturnType | LatLngReturnType[];
export declare function toLatLngBoundsFunction(a: LatLngReturnType | LatLngReturnType[] | LatLngBoundsReturnType, b: LatLngReturnType | LatLngReturnType[] | LatLngBoundsReturnType): LatLngBoundsReturnType;
export {};
