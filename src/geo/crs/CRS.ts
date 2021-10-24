import { BoundsClass } from "../../geometry/BoundsClass";
import {LatLngFunction} from '../LatLngFunction';
import { LatLngBoundsClass } from "../LatLngBoundsClass";
import { LatLngBoundsFunction } from "../LatLngBoundsFunction";
import * as Util from '../../core/Util';

import {LonLat} from './Projection.LonLat';
import {Mercator} from './Projection.Mercator';
import {SphericalMercator} from './Projection.SphericalMercator';


// import {LatLng} from '../LatLng';
// import {Bounds} from '../../geometry/Bounds';
// import {Point} from '../../geometry/Point';

import {projection} from './Projection';

import {Object, ReturnType} from 'typescript';
// import {$ , Event} from 'jquery';
import {PointFunction} from "src/geometry";

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
import { PointReturnImpl } from 'src/geometry/PointReturnImpl';
import { PointsTransformationFunction } from 'src/geometry/PointsTransformation';
import { PointReturn } from "src/geometry/PointReturn";
import { toLatLngBoundsFunction } from "../LatLngBoundsFunction";
import { LatLngClass } from "../LatLngClass";
import { Projection } from "Leaflet";
type BoundsClassReturnType = ReturnType<typeof BoundsClass>;
type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngFunction.prototype.clone>;
// type MapReturnType = ReturnType<typeof Map>;
// type LayerGroupReturnType = ReturnType<typeof LayerGroup>;
// type EventReturnType= ReturnType<typeof Event>;
type LatLngBoundsReturnType= ReturnType<typeof LatLngBoundsClass|typeof LatLngBoundsFunction>;
// type HTMLElementReturnType = ReturnType<typeof HTMLElement>;
type NumberReturnType = ReturnType<typeof  PointFunction.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
type PointReturnType = ReturnType<typeof  PointFunction.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;

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
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 *
 * Note that the CRS instances do not inherit from Leaflet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.
 */

export const CRS = {
	
	// let projection = projection();
	let projection = Projection.LonLat;
	let transformation = PointsTransformationFunction.prototype;

	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
	// Projects geographical coordinates into pixel coordinates for a given zoom.
	latLngToPoint: function (latlng:LatLngReturnType, zoom:NumberReturnType):PointReturnImpl {
		const projectedPoint = this.projection.project(latlng);
		const scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	// @method pointToLatLng(point: Point, zoom: Number): LatLng
	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
	// zoom into geographical coordinates.
	pointToLatLng: function (point:PointReturnImpl, zoom:NumberReturnType) {
		const scale = this.scale(zoom);
		const untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	// @method project(latlng: LatLng): Point
	// Projects geographical coordinates into coordinates in units accepted for
	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
	project: function (latlng:LatLngReturnType):PointReturn {
		return this.projection.project(latlng);
	},

	// @method unproject(point: Point): LatLng
	// Given a projected coordinate returns the corresponding LatLng.
	// The inverse of `project`.
	unproject: function (point:PointReturnImpl):LatLngReturnType {
		return this.projection.unproject(point);
	},

	// @method scale(zoom: Number): Number
	// Returns the scale used when transforming projected coordinates into
	// pixel coordinates for a particular zoom. For example, it returns
	// `256 * 2^zoom` for Mercator-based CRS.
	scale: function (zoom:NumberReturnType):NumberReturnType {
		return 256 * Math.pow(2, zoom);
	},

	// @method zoom(scale: Number): Number
	// Inverse of `scale()`, returns the zoom level corresponding to a scale
	// factor of `scale`.
	zoom: function (scale:NumberReturnType):NumberReturnType {
		return Math.log(scale / 256) / Math.LN2;
	},

	// @method getProjectedBounds(zoom: Number): Bounds
	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
	getProjectedBounds: function (zoom:NumberReturnType):BoundsClassReturnType|String {

		if (this.infinite) { return null; }

		const b = this.projection.bounds;

		const s = this.scale(zoom);

		const min = this.transformation.transform(b.min, s);

		const max = this.transformation.transform(b.max, s);

		return new BoundsClass(min, max);

	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates.

	// @property code: String
	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
	//
	// @property wrapLng: Number[]
	// An array of two numbers defining whether the longitude (horizontal) coordinate
	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
	//
	// @property wrapLat: Number[]
	// Like `wrapLng`, but for the latitude (vertical) axis.

	// wrapLng: [min, max],
	// wrapLat: [min, max],

	// @property infinite: Boolean
	// If true, the coordinate space will be unbounded (infinite in both axes)
	infinite: false,

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where lat and lng has been wrapped according to the
	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
	wrapLatLng: function (latlng:LatLngReturnType): LatLngReturnType {

		const lng = this.wrapLng ? Util.wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng;

		const lat = this.wrapLat ? Util.wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat;

		const alt = latlng.alt;

		return new LatLngFunction(lat, lng, alt);
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring
	// that its center is within the CRS's bounds.
	// Only accepts actual `L.LatLngBounds` instances, not arrays.
	wrapLatLngBounds: function (bounds:LatLngBoundsReturnType):LatLngBoundsReturnType {

		const center = bounds.getCenter();

		const newCenter = this.wrapLatLng(center);

		const latShift = center.lat - newCenter.lat;
		const lngShift = center.lng - newCenter.lng;

		if (latShift === 0 && lngShift === 0) {
			return bounds;
		}

		const sw = bounds.getSouthWest();

		const ne = bounds.getNorthEast();

		const newSw = new LatLngClass(sw.lat - latShift, sw.lng - lngShift);

		const newNe = new LatLngClass(ne.lat - latShift, ne.lng - lngShift);

		return new LatLngBoundsClass(newSw, newNe);
	}
};
