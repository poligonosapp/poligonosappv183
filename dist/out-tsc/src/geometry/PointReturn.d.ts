import { Object, ReturnType } from "typescript";
declare type NumberReturnType = number | ReturnType<typeof Object.Number>;
export interface PointReturn {
    x: number | ReturnType<typeof Object.Number>;
    y: number | ReturnType<typeof Object.Number>;
    getX(): NumberReturnType;
    getY(): NumberReturnType;
}
export {};
