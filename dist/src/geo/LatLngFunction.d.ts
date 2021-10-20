import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
declare type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngFunction.prototype.clone>;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export interface Props {
    lat: NumberReturnType;
    lng: NumberReturnType;
    alt: NumberReturnType;
}
export declare function LatLngFunction(props: Props): void;
export declare function toLatLng(a: NumberReturnType, b: NumberReturnType, c: NumberReturnType): LatLngReturnType;
export {};
