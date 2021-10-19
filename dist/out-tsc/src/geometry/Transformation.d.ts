import { Point } from './Point';
import { ReturnType } from 'typescript';
import { PointReturnImpl } from './PointReturnImpl';
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare function Transformation(coefficients: NumberReturnType[]): any[];
export declare function Transformation2(a: NumberReturnType[] | Set<NumberReturnType>, b: NumberReturnType[] | Set<NumberReturnType>, c: NumberReturnType[] | Set<NumberReturnType>, d: NumberReturnType[] | Set<NumberReturnType>): NumberReturnType[] | NumberReturnType | PointReturnImpl | void;
export declare function toTransformation(coefficients: NumberReturnType[]): NumberReturnType[];
export declare function toTransformation2(a: NumberReturnType, b: NumberReturnType, c: NumberReturnType, d: NumberReturnType): PointReturnImpl | void;
export {};
