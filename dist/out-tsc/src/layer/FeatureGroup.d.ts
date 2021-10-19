import { LayerGroup } from './LayerGroup';
import { Object, ReturnType } from 'typescript';
import { Point } from "../geometry";
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
declare type LayerReturnType = ReturnType<typeof String> | ReturnType<typeof LayerGroup> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare const FeatureGroup: any;
export declare const featureGroup: (layers: LayerReturnType[], options: NumberReturnType) => any;
export {};
