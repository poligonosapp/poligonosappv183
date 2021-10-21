import { Point } from "src/geometry";
import { LayerGroup } from "src/layer";
import { GeoJSONAbstractClass } from "./GeoJSONAbstractClass";

// import * as L from '../Leaflet';

import {Map} from "src/map/Map";

import { GeoJSONClass } from "src/layer/GeoJSONClass";
import { GeoJSONFunction } from "src/layer/GeoJSONFunction";

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
export type GeoJSONReturnType = ReturnType<typeof GeoJSONClass|typeof GeoJSONFunction>;

export type MapReturnType = ReturnType<typeof Map>;
type StringReturnType = ReturnType<typeof  Point.prototype.toString> | string | ReturnType<typeof Object.String>;
type LayerReturnType = ReturnType<typeof String> | ReturnType<typeof LayerGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;


export const HandlerFunction = GeoJSONAbstractClass.extend({

	initialize: function (map:MapReturnType) {
		this._map = map;
	},

	// @method enable(): this
	// Enables the handler
	enable: function () {
		if (this._enabled) { return this; }

		this._enabled = true;
		this.addHooks();
		return this;
	},

	// @method disable(): this
	// Disables the handler
	disable: function () {
		if (!this._enabled) { return this; }

		this._enabled = false;
		this.removeHooks();
		return this;
	},

	// @method enabled(): Boolean
	// Returns `true` if the handler is enabled
	enabled: function ():boolean {
		return !!this._enabled;
	}

	// @section Extension methods
	// Classes inheriting from `Handler` must implement the two following methods:
	// @method addHooks()
	// addHooks: function(){
		// const react = require('react');
		// return react.useHooks();
	// }
	// Called when the handler is enabled, should add event hooks.
	// @method removeHooks()
	// Called when the handler is disabled, should remove the event hooks added previously.
	// removeHooks: function(){
		// const react = require('react');
		// return react.removeHooks();
	// }

	// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.

	addTo : function (map:MapReturnType, name:StringReturnType):MapReturnType {
	 map.addHandler(name, this);
	 return this;
 	};

});



