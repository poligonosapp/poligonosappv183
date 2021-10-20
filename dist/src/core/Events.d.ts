import { Object, ReturnType, Event } from 'typescript';
import { Point } from "../geometry";
declare type EventReturnType = ReturnType<typeof Event>;
declare type StringReturnType = ReturnType<typeof Point.prototype.toString> | string | ReturnType<typeof Object.String>;
export declare const Events: {
    on: (types: any, fn: any, context: any) => any;
    off: (types: any, fn: any, context: any) => any;
    _on: (type: any, fn: any, context: any) => void;
    _off: (type: any, fn: any, context: any) => void;
    fire: (type: StringReturnType, data: any, propagate: boolean) => any;
    listens: (type: StringReturnType, propagate: boolean) => boolean;
    once: (types: any, fn: any, context: any) => any;
    addEventParent: (obj: any) => any;
    removeEventParent: (obj: any) => any;
    _propagateEvent: (e: any) => void;
};
export declare const Evented: EventReturnType;
export {};
