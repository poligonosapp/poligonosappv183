/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {LatLngFunction} from '../LatLngFunction';
import { BoundsClass } from "../../geometry/BoundsClass";
import {PointFunction} from "src/geometry/PointFunction";

import {Object, ReturnType} from 'typescript';
// import {$ , Event} from 'jquery';
// import {Point} from "../geometry";
import { PointsTransformationClass, PointsTransformationFunction } from 'src/geometry/PointsTransformation';
import { LatLngReturnType } from 'src/layer/vector/PolylineFunction';
import { BoundsFunction } from 'src/geometry/BoundsFunction';

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// type MapReturnType = ReturnType<typeof Map>;
// type LayerGroupReturnType = ReturnType<typeof LayerGroup>;
// type EventReturnType= ReturnType<typeof Event>;
// type LatLngBoundsReturnType= ReturnType<typeof LatLngBounds>;
// type HTMLElementReturnType = ReturnType<typeof HTMLElement>;
// type NumberReturnType = ReturnType<typeof  Point.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
type PointReturnType = ReturnType<typeof  PointFunction.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof PointFunction>;

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
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */

export const LonLat = {
	project: function (latlng:LatLngReturnType):PointReturnType {
		return PointsTransformationFunction(latlng.lng, latlng.lat, latlng.alt);
	},

	unproject: function (point:PointReturnType):LatLngReturnType {
		return LatLngFunction(point.y, point.x, undefined);
	},

	bounds: BoundsFunction([-180, -90], [180, 90])
};
