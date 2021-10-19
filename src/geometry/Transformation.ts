/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {Point} from './Point';
import * as Util from '../core/Util';

import {ReturnType, Object} from 'typescript';
// import {Point} from "../geometry";
// import {LatLngBounds} from "../geo";
import { PointReturnImpl } from './PointReturnImpl';
// import {Point} from "../geometry";

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// type LatLngReturnType = ReturnType<typeof LatLng>;
// type LatLngBoundsReturnType = ReturnType<typeof LatLngBounds>;
type NumberReturnType = ReturnType<typeof  Point.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
type PointReturnType = ReturnType<typeof Point>;
// type StringReturnType = ReturnType<typeof  Point.prototype.toString> | string | ReturnType<typeof Object.String>;
// type _roundReturnType = ReturnType<typeof  Point.prototype._round> | number | ReturnType<typeof Object.Number>;
// type roundReturnType = ReturnType<typeof  Point.prototype.round> | number | ReturnType<typeof Object.Number>;
// type floorReturnType = ReturnType<typeof  Point.prototype.floor> | number | ReturnType<typeof Object.Number>;

// type numberAuxX = ReturnType<typeof Object.Number>;

// type numberAuxY = ReturnType<typeof Object.Number>;

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```tsc
 * const transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */

	// _a:ReturnType<typeof NumberReturnType[]>|Set<NumberReturnType>;
	// _b:NumberReturnType[]|Set<NumberReturnType>;
	// _c:NumberReturnType[]|Set<NumberReturnType>;
	// _d:NumberReturnType[]|Set<NumberReturnType>;


// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
export function Transformation(coefficients:NumberReturnType[]){
	return coefficients;
}
export function Transformation2(a:NumberReturnType[]|Set<NumberReturnType>, 
	b:NumberReturnType[]|Set<NumberReturnType>, 
	c:NumberReturnType[]|Set<NumberReturnType>, 
	d:NumberReturnType[]|Set<NumberReturnType>):NumberReturnType[]|NumberReturnType|PointReturnImpl|void {

	// 'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
	// let this._a: NumberReturnType;
	// let this._b: NumberReturnType;
	// let this._c: NumberReturnType;
	// let this._d: NumberReturnType;

	if (Util.isArray(a)) {
		// use array properties
		this._a = a[0];
		this._b = a[1];
		this._c = a[2];
		this._d = a[3];
		return;
	}
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
}

Transformation.prototype = {
	// @method transform(point: Point, scale?: Number): Point
	// Returns a transformed point, optionally multiplied by the given scale.
	// Only accepts actual `L.Point` instances, not arrays.
	transform: function (point:PointReturnType, scale:NumberReturnType):PointReturnType { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point:PointReturnImpl, scale:NumberReturnType):PointReturnImpl {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	// @method untransform(point: Point, scale?: Number): Point
	// Returns the reverse transformation of the given point, optionally divided
	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
	untransform: function (point:PointReturnImpl, scale:NumberReturnType):PointReturnImpl {

		scale = scale || 1;
		
		return new Point(
			(point.x / scale - this._b) / this._a,
		(point.y / scale - this._d) / this._c);
	}
};

// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.

// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.

export function toTransformation(coefficients:NumberReturnType[]):NumberReturnType[]{
	return new Transformation(coefficients);
}

export function toTransformation2(a:NumberReturnType, b:NumberReturnType, c:NumberReturnType, d:NumberReturnType):PointReturnImpl|void {
	return new Transformation(a, b, c, d);
}
