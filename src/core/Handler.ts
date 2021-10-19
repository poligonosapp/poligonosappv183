import { Point } from "src/geometry";
import { GeoJSON, LayerGroup } from "src/layer";
import { GeoJSONAbstractClass } from "./GeoJSONAbstractClass";

import * as L from '../Leaflet';

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
type GeoJSONReturnType = ReturnType<typeof GeoJSON>;
export type MapReturnType = ReturnType<typeof L.Map>;
type StringReturnType = ReturnType<typeof  Point.prototype.toString> | string | ReturnType<typeof Object.String>;
type LayerReturnType = ReturnType<typeof String> | ReturnType<typeof LayerGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;


/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers

export public class Handler extends GeoJSONAbstractClass.extend({

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
	// Called when the handler is enabled, should add event hooks.
	// @method removeHooks()
	// Called when the handler is disabled, should remove the event hooks added previously.

	// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.

	addTo : function (map:MapReturnType, name:StringReturnType):MapReturnType {
	 map.addHandler(name, this);
	 return this;
 	};

});


