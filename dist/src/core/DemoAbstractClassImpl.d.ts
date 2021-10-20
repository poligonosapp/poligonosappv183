import { ReturnType } from "typescript";
import { GeoJSON } from './layer/vector/GeoJSON';
import { Map } from '../Map';
declare type GeoJSONReturnType = ReturnType<typeof GeoJSON>;
export declare type MapReturnType = ReturnType<typeof Map>;
export declare function extend(props: GeoJSONReturnType[]): {
    (): any;
    __super__: any;
    prototype: any;
};
export {};
