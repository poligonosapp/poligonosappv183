import { FeatureGroup } from './FeatureGroup';
import { LatLngFunction } from '../geo/LatLngFunction';
import { Object, ReturnType } from "typescript";
import { Point } from "../geometry";
import { Map } from "src/map/Map";
import { GeoJSONClass } from './GeoJSONClass';
import { Function } from 'typescript';
declare type FunctionReturnType = ReturnType<typeof Function>;
declare type NumberReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
declare type LatLngReturnType = ReturnType<typeof LatLngFunction>;
declare type GeoJSONReturnType = ReturnType<typeof GeoJSONFunction | GeoJSONClass>;
export declare type MapReturnType = ReturnType<typeof Map>;
declare type LayerReturnType = ReturnType<typeof FeatureGroup> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export interface Props {
    geojson: GeoJSONReturnType;
    options: NumberReturnType;
}
export declare const GeoJSONFunction: FunctionReturnType;
export declare function geometryToLayer(geojson: GeoJSONReturnType, options: NumberReturnType): LayerReturnType;
export declare function coordsToLatLng(coords: []): LatLngReturnType;
export declare function coordsToLatLngs(coords: [], levelsDeep: NumberReturnType, _coordsToLatLng: FunctionReturnType): LatLngReturnType[];
export declare function latLngToCoords(latlng: LatLngReturnType, precision: NumberReturnType): any[];
export declare function latLngsToCoords(latlngs: LatLngReturnType[], levelsDeep: NumberReturnType, closed: boolean, precision: NumberReturnType): LatLngReturnType[];
export declare function getFeature(layer: LayerReturnType, newGeometry: GeoJSONReturnType): GeoJSONReturnType;
export declare function asFeature(geojson: GeoJSONReturnType): GeoJSONReturnType;
export declare function geoJSON(geojson: GeoJSONReturnType, options: NumberReturnType): GeoJSONReturnType;
export declare const geoJson: typeof geoJSON;
export {};
