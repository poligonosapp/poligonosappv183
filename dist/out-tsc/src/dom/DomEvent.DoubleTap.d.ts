import Event from 'typescript';
import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
declare type idReturnType = ReturnType<typeof Number>;
declare type objReturnType = ReturnType<typeof Object | typeof Event | typeof Point>;
declare type handlerReturnType = ReturnType<typeof Object | typeof Event | typeof Point>;
export declare function addDoubleTapListener(obj: objReturnType, handler: handlerReturnType, id: idReturnType): any;
export declare function removeDoubleTapListener(obj: objReturnType, id: idReturnType): any;
export {};
