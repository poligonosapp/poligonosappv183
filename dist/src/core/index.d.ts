import * as Browser from './Browser';
export { Browser };
export { GeoJSONAbstractClass } from './GeoJSONAbstractClass';
import { Evented } from './Events';
export { Evented };
export declare const Mixin: {
    Events: {
        on: (types: any, fn: any, context: any) => any;
        off: (types: any, fn: any, context: any) => any;
        _on: (type: any, fn: any, context: any) => void;
        _off: (type: any, fn: any, context: any) => void;
        fire: (type: any, data: any, propagate: boolean) => any;
        listens: (type: any, propagate: boolean) => boolean;
        once: (types: any, fn: any, context: any) => any;
        addEventParent: (obj: any) => any;
        removeEventParent: (obj: any) => any;
        _propagateEvent: (e: any) => void;
    };
};
export { Handler } from './Handler';
import * as Util from './Util';
export { Util };
export { extend, bind, stamp, getOptions as setOptions } from './Util';
