/* eslint-disable @typescript-eslint/no-unsafe-return */
import {LatLngFunction} from '../LatLngFunction';
import { Bounds } from "../../geometry/Bounds.1";
import {PointFunction} from '../../geometry/PointFunction';
import { PointReturnImpl } from 'src/geometry/PointReturnImpl';

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// type NumberReturnType = ReturnType<typeof  Point.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngFunction.prototype.clone>;

/*
 * @namespace Projection
 * @projection L.Projection.Mercator
 *
 * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
 */

export const Mercator = {
	R: 6378137,
	R_MINOR: 6356752.314245179,

	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

	project: function (latlng:LatLngReturnType) {
		let d = Math.PI / 180;
		let r = this.R;
		let y = latlng.lat * d;
		let tmp = this.R_MINOR / r;
		let e = Math.sqrt(1 - tmp * tmp);
		let con = e * Math.sin(y);

		const ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);

		y = -r * Math.log(Math.max(ts, 1E-10));

		return new PointFunction(latlng.lng * d * r, y);
	},

	unproject: function (point:PointReturnImpl):LatLngReturnType {
		let d = 180 / Math.PI;
		let r = this.R;
		let tmp = this.R_MINOR / r;
		let e = Math.sqrt(1 - tmp * tmp);
		let ts = Math.exp(-point.y / r);
		let phi = Math.PI / 2 - 2 * Math.atan(ts);

		for (let i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
			con = e * Math.sin(phi);
			con = Math.pow((1 - con) / (1 + con), e / 2);
			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
			phi += dphi;
		}

		return new LatLngFunction(phi * d, point.x * d / r);
	}
};
