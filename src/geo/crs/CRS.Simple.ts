/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {CRS} from './CRS';
import {LonLat} from '../projection/Projection.LonLat';
import {toPointsTransformationFunction} from '../../geometry/PointsTransformation';
import * as Util from '../../core/Util';


import {LatLng} from '../LatLng';
import { Bounds } from "../../geometry/Bounds.1";
import {Point} from '../../geometry/Point';


import {Object, ReturnType} from 'typescript';
// import {$ , Event} from 'jquery';
import {Point} from "../geometry";

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
type NumberReturnType = ReturnType<typeof  Point.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
type LatLngReturnType = ReturnType<typeof LatLng> | ReturnType<typeof LatLng.prototype.clone>;
// type MapReturnType = ReturnType<typeof Map>;
// type LayerGroupReturnType = ReturnType<typeof LayerGroup>;
// type EventReturnType= ReturnType<typeof Event>;
// type LatLngBoundsReturnType= ReturnType<typeof LatLngBounds>;
// type HTMLElementReturnType = ReturnType<typeof HTMLElement>;
// type NumberReturnType = ReturnType<typeof  Point.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
type PointReturnType = ReturnType<typeof  Point.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;

// type GridLayerReturnType = ReturnType<typeof  FeatureGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
// type LayerReturnType = ReturnType<typeof  FeatureGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
// type LayerGroupReturnType = ReturnType<typeof  LayerGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;

// type PointReturnType = ReturnType<typeof Point>;
// type StringReturnType = ReturnType<typeof  Point.prototype.toString> | string | ReturnType<typeof Object.String>;
// type _roundReturnType = ReturnType<typeof  Point.prototype._round> | number | ReturnType<typeof Object.Number>;
// type roundReturnType = ReturnType<typeof  Point.prototype.round> | number | ReturnType<typeof Object.Number>;
// type floorReturnType = ReturnType<typeof  Point.prototype.floor> | number | ReturnType<typeof Object.Number>;

// type numberAuxX = ReturnType<typeof Object.Number>;

// type numberAuxY = ReturnType<typeof Object.Number>;

/*
 * @namespace CRS
 * @crs L.CRS.Simple
 *
 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
 * axis should still be inverted (going from bottom to top). `distance()` returns
 * simple euclidean distance.
 */

export const Simple = Util.extend({}, CRS, {
	projection: LonLat,
	transformation: toPointsTransformationFunction(1, 0, -1, 0),

	scale: function (zoom):NumberReturnType {
		return Math.pow(2, zoom);
	},

	zoom: function (scale):NumberReturnType {
		return Math.log(scale) / Math.LN2;
	},

	distance: function (latlng1:LatLngReturnType, latlng2:LatLngReturnType):NumberReturnType {
		const dx = latlng2.lng - latlng1.lng;
		const dy = latlng2.lat - latlng1.lat;

		return Math.sqrt(dx * dx + dy * dy);
	},

	infinite: true
});
