/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {ReturnType, Number} from "typescript";

type NumberReturnType = ReturnType<typeof Object.Number>;

interface Props{
    x: NumberReturnType;
    y: NumberReturnType;
}

class PointClass implements Props{

    constructor(props:Props){
        this.x = props.x;
        this.y = props.y;
    }
    x: NumberReturnType;
    y: NumberReturnType;
}