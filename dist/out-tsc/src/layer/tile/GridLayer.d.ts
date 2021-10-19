import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
import { FeatureGroup } from "../FeatureGroup";
declare type GridLayerReturnType = ReturnType<typeof FeatureGroup> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare const GridLayer: any;
export declare function gridLayer(options: GridLayerReturnType): GridLayerReturnType;
export {};
