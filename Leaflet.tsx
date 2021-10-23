/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {version} from "package";
export {version};

// import * as L from './Leaflet';
import {Map} from './src/map/Map';
import {Object, ReturnType, Set} from "typescript";
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
export type GeoJSONReturnType = ReturnType<typeof GeoJSONClass| typeof GeoJSONFunction>;
export type MapReturnType = ReturnType<typeof Map>;
export type LayerReturnType = ReturnType<typeof String> | ReturnType<typeof LayerGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
export type PathOptionsReturnType = ReturnType<typeof String> | ReturnType<typeof Object.Number> | ReturnType<typeof Object.Boolean>;

// import {L.PoligonosApp} from './PoligonosApp';

const polygonsArray:[] = require('./polygons.geojson');

import {GeoJSONClass} from 'src/layer/GeoJSONClass';
import {GeoJSONFunction} from 'src/layer/GeoJSONFunction';

import {LayerGroup} from "./src/layer";
import {Point} from "./src/geometry";
import { polygonsArray, polygonsArray } from "src/PoligonosApp";

// import { L, Map, Layer, Canvas, tileLayer, geoJSON, Polygon } from './Leaflet';

function makeUnique(polygonsArray: GeoJSONReturnType[]):Set<GeoJSONReturnType[]> {

// const setObjects:Set<GeoJSONReturnType> = new Set(polygonsArray);

	// return setObjects;
	return new Set(polygonsArray);
}

export const PoligonosApp = L.Class.include({

	// A property with initial value = 42
	PoligonosAppProperty: makeUnique(polygonsArray),

	// A method
	PoligonosAppMethod: function(polygonsArray):GeoJSONReturnType[] {

		L.Polygon.include(polygonsArray);

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

// export * from PoligonosApp;

// control
export * from './src/control/index';

// core
export * from './src/core/index';

// dom
export * from './src/dom/index';

// geometry
export * from './src/geometry/index';

// geo
export * from './src/geo/index';

// layer
export * from './src/layer/index';

// map
export * from './src/map/index';

// export require('iconv').Iconv;

// export * as namespace from "PoligonosApp";


