/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {PointFunction} from './PointFunction';
import * as Util from '../core/Util';

import {ReturnType, Object} from 'typescript';
// import {Point} from "../geometry";
// import {LatLngBounds} from "../geo";
import { PointReturnImpl } from './PointReturnImpl';
import { LatLngReturnType } from 'src/layer/vector/PolylineFunction';
import { ArrayTransformationClass } from './ArrayTransformation';
// import { PointsTransformationFunction } from './ArrayTransformation';
// import {Point} from "../geometry";

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// type LatLngReturnType = ReturnType<typeof LatLng>;
// type LatLngBoundsReturnType = ReturnType<typeof LatLngBounds>;
type NumberReturnType = ReturnType<typeof  PointFunction.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof PointFunction>;
type PointReturnType = ReturnType<typeof PointFunction>;
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

export class PointsTransformationClass implements Iterable<PointReturnImpl>{

	_a:PointReturnImpl;
    _b:PointReturnImpl;
	_c:PointReturnImpl;
	_d:PointReturnImpl;

	coefficients!: Set<PointReturnType>;

	constructor(a:PointReturnImpl, 
		b:PointReturnImpl, 
		c:PointReturnImpl, 
		d:PointReturnImpl){

			this._a = a;
			this._b = b;
			this._c = c;
			this._d = d;
		
	}
	[Symbol.iterator](): Iterator<PointReturnImpl, any, undefined> {
		

	
				// this.coefficients = new PointReturnImpl[4];
	
				// for(const i in this.coefficients){
	
					this.coefficients.add(a);// | a.values(0)
	
					this.coefficients.add(b);
	
					this.coefficients.add(c);
	
					this.coefficients.add(d);
				// }


				return this.coefficients;
	
		

	}// end iterator implementation

}

export function PointsTransformationFunction(a:PointReturnImpl, 
	b:PointReturnImpl, 
	c:PointReturnImpl, 
	d:PointReturnImpl):NumberReturnType[]|NumberReturnType|PointReturnImpl|void {

	// this._a:PointReturnImpl = a;
	// this._b:PointReturnImpl = b;
	// this._c:PointReturnImpl = c;
	// this._d:PointReturnImpl = d;
}

PointsTransformationFunction.prototype = {

	project: function (latlng:LatLngReturnType):PointReturnImpl{
		return latlng.toPoint();
	}
	
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
		
		return new PointReturnImpl(
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

export function toArrayTransformationFunction(coefficients:NumberReturnType[]):ArrayTransformationClass[]{
	return new ArrayTransformationClass(coefficients);
}

export function toPointsTransformationFunction(a:NumberReturnType, b:NumberReturnType, c:NumberReturnType, d:NumberReturnType):PointsTransformationClass {
	return new PointsTransformationClass(a, b, c, d);
}
