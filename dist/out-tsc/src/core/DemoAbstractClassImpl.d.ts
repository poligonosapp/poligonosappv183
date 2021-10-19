import { ReturnType } from "typescript";
import { GeoJSON } from './layer/vector/GeoJSON';
import * as L from '../Leaflet';
declare type GeoJSONReturnType = ReturnType<typeof GeoJSON>;
export declare type MapReturnType = ReturnType<typeof L.Map>;
export declare function extend(props: GeoJSONReturnType[]): {
    (): any;
    __super__: any;
    prototype: any;
};
export {};
