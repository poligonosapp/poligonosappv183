/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {version} from '../package.json';
export {version};

// import * as L from './Leaflet';
import {Map} from './Leaflet';

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
type GeoJSONReturnType = ReturnType<typeof GeoJSON>;
export type MapReturnType = ReturnType<typeof Map>;
type LayerReturnType = ReturnType<typeof String> | ReturnType<typeof LayerGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;

// import {L.PoligonosApp} from './PoligonosApp';

const polygonsArray = require('./polygons.geojson');

import {GeoJSON} from './layer/vector/GeoJSON';
import {Object, ReturnType, Set} from "typescript";
import {LayerGroup} from "./layer";
import {Point} from "./geometry";

const {L, Map, Layer, Canvas, tileLayer, geoJSON, Polygon} = require('./Leaflet.ts');

//canvas
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
public const map: MapReturnType = L.Map('map', {
	renderer: L.canvas()
});

const data:GeoJSONReturnType[] = require('/polygons.geojson');

  L.geoJSON(data, {
 	style: function (feature:LayerReturnType) {
 		return {color: feature.properties.color};
 	}
 }).bindPopup(function (layer:LayerReturnType) {
 	return layer.feature.properties.description;
 }).addTo(map);

function makeUnique(polygonsArray: GeoJSONReturnType[]):Set<GeoJSONReturnType> {

// const setObjects:Set<GeoJSONReturnType> = new Set(polygonsArray);

	// return setObjects;
	return new Set(polygonsArray);
}

const PoligonosApp = L.Class.extend({

	// A property with initial value = 42
	PoligonosAppProperty: makeUnique(polygonsArray),

	// A method
	PoligonosAppMethod: function():GeoJSONReturnType[] {

		// const s = new Server();

		// ui

		return this.myDemoProperty;
	}

});

// poligonosapp plugin new class
// export function poligonosapp(){
    // require('./PoligonosApp');
    // return require('./PoligonosApp');
// }

export * from PoligonosApp;

// control
export * from './control/index';

// core
export * from './core/index';

// dom
export * from './dom/index';

// geometry
export * from './geometry/index';

// geo
export * from './geo/index';

// layer
export * from './layer/index';

// map
export * from './map/index';

// export require('iconv').Iconv;


