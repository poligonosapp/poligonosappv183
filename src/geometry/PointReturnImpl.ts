/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {Point} from "./Point";

import {PointReturn} from "./PointReturn";

import {Object, ReturnType} from "typescript";

type NumberReturnType = number | ReturnType<typeof Object.Number>;

export class PointReturnImpl implements PointReturn{

    // round: number | ReturnType<typeof Object.Number>;

    constructor(...args: [x: number, y: number, round:number]) {
        if(round){
            this.roundXY(x, y, round);
        }
    }
    // typescript PointReturn interface implementation
    x: number | ReturnType<typeof Object.Number>;
    y: number | ReturnType<typeof Object.Number>;

    public getX(): number|NumberReturnType{
        return this.x;
    }
    public getY(): number|NumberReturnType{
        return this.y;
    }

    roundXY(x:number, y:number, round:number):PointReturn {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        x = Object.create((round ? Math.round(x) : x));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        y = Object.create((round ? Math.round(y) : y));
    
        // @ts-ignore
        return new Point(x, y);
    }

}
