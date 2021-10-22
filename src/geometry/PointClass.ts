/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {ReturnType} from "typescript";

type NumberReturnType = ReturnType<typeof number> | ReturnType<typeof Object.Number>;

class PointClass{

    constructor(x: NumberReturnType, y: NumberReturnType){
        this.x = x;
        this.y = y;
    }
    x: NumberReturnType;
    y: NumberReturnType;
}