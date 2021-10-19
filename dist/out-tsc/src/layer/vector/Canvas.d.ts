import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
declare type CanvasReturnType = ReturnType<typeof Canvas>;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare const Canvas: any;
export declare function canvas(options: NumberReturnType): CanvasReturnType;
export {};
