import {Round} from "./Round";
import {PointClass} from "./PointClass";
import {Object, ReturnType} from "typescript";

type NumberReturnType = number | ReturnType<typeof Object.Number>;

class RoundImpl implements Round{

    constructor(){

    }

    function roundPoint(x: NumberReturnType, y: NumberReturnType, round: NumberReturnType){

        // @property x:Number ; The 'x' coordinate of the point
        this.x = (round ? Math.round(x) : x );
        // @property y:Number ; The 'y' coordinate of the point
        this.y = (round ? Math.round(y) : y );

        return new PointClass(x,y);
    }

}// end class ReturnImpl