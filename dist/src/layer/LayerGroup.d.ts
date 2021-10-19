import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
import { FeatureGroup } from "./FeatureGroup";
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
declare type LayerReturnType = ReturnType<typeof FeatureGroup> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
declare type LayerGroupReturnType = ReturnType<typeof LayerGroup> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare const LayerGroup: any;
export declare const layerGroup: (layers: LayerReturnType[], options: NumberReturnType) => LayerGroupReturnType;
export {};
