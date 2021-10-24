/* eslint-disable @typescript-eslint/no-unused-vars */
import {Object, ReturnType} from "typescript";
import { PointClass } from "./PointClass";

type NumberReturnType = ReturnType<typeof Object.Number>;
type PointClassReturnType = ReturnType<typeof PointClass>;

abstract class Round{
    x: NumberReturnType;
    y: NumberReturnType;
    roundProperty: NumberReturnType; 

    public function roundPoint(x: NumberReturnType, y: NumberReturnType, round: NumberReturnType ):PointClassReturnType;

}
