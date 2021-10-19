import { PointReturn } from "./PointReturn";
import { Object, ReturnType } from "typescript";
declare type NumberReturnType = number | ReturnType<typeof Object.Number>;
export declare class PointReturnImpl implements PointReturn {
    constructor(...args: [x: number, y: number, round: number]);
    x: number | ReturnType<typeof Object.Number>;
    y: number | ReturnType<typeof Object.Number>;
    getX(): number | NumberReturnType;
    getY(): number | NumberReturnType;
    roundXY(x: number, y: number, round: number): PointReturn;
}
export {};
