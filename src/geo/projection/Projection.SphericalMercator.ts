import {LatLng} from '../LatLng';
import { Bounds } from "../../geometry/Bounds.1";
import {Point} from '../../geometry/Point';

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// type NumberReturnType = ReturnType<typeof  Point.prototype.clone> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;
type LatLngReturnType = ReturnType<typeof LatLng> | ReturnType<typeof LatLng.prototype.clone>;

/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

const earthRadius = 6378137;

export const SphericalMercator = {

	R: earthRadius,
	MAX_LATITUDE: 85.0511287798,

	project: function (latlng:LatLngReturnType) {
		const d = Math.PI / 180,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    sin = Math.sin(lat * d);

		return new Point(
			this.R * latlng.lng * d,
			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
	},

	unproject: function (point) {
		const d = 180 / Math.PI;

		return new LatLng(
			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
			point.x * d / this.R);
	},

	bounds: (function () {
		const d = earthRadius * Math.PI;
		return new Bounds([-d, -d], [d, d]);
	})()
};
