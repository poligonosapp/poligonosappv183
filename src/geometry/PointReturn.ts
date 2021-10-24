import {Object, ReturnType, Iterable} from "typescript";
// 'extends' clause of exported interface 'PointReturn' has or is using private name 'PointFunction'.ts(4022)
// any
// import {PointFunction} from "./PointFunction";

type NumberReturnType = number | ReturnType<typeof Object.Number>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface PointReturn{ // implements Iterable<PointFunction>{

    x: number | ReturnType<typeof Object.Number>;
    y: number | ReturnType<typeof Object.Number>;

    // constructor(x:number, y:number);

    getX():NumberReturnType;
    getY():NumberReturnType;
}

