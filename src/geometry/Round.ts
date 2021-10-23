import {Object, ReturnType} from "typescript";
import { PointClass } from "./PointClass";

type NumberReturnType = number | ReturnType<typeof Object.Number>;

interface Round{
    x: NumberReturnType;
    y: NumberReturnType;
    round: NumberReturnType; 

    function round(x: NumberReturnType, y: NumberReturnType, round: NumberReturnType ):PointClass;

}
