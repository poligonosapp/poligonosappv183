import { Object, ReturnType } from 'typescript';
import { PointReturnImpl } from './PointReturnImpl';
export declare function Point(...args: [x: NumberReturnType, y: NumberReturnType, round: NumberReturnType]): PointReturnImpl;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
declare type PointReturnType = ReturnType<typeof Point>;
export declare function toPoint(x: PointReturnType[], y: NumberReturnType[], round: NumberReturnType[]): PointReturnType;
export {};
