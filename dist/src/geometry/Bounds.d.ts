import { Object, ReturnType } from 'typescript';
import { Point } from "./Point";
import { PointReturnImpl } from "./PointReturnImpl";
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
declare type PointReturnType = ReturnType<typeof Point> | ReturnType<typeof PointReturnImpl>;
declare type BoundsReturnType = ReturnType<typeof Bounds | typeof Array | typeof Point | typeof Point[]>;
export declare function Bounds(a: NumberReturnType, b: NumberReturnType): BoundsReturnType;
export declare function toBounds(a: PointReturnType | PointReturnType[], b: PointReturnType | PointReturnType[]): BoundsReturnType;
export {};
