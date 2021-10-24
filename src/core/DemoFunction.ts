import { GeoJSONAbstractClass } from './GeoJSONAbstractClass';
import * as Util from './Util';

import {Object, ReturnType, HTMLAnchorElement} from "typescript";

import {GeoJSONClass} from "src/layer/GeoJSONClass";
import {GeoJSONFunction} from "src/layer/GeoJSONFunction";

import { Point } from 'src/geometry';
import { LayerGroup } from 'src/layer';

// import * as L from '../Leaflet';
import {Map} from '../Map';

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
type GeoJSONReturnType = ReturnType<typeof GeoJSONClass|typeof GeoJSONFunction>;
type HTMLAnchorElementReturnType = ReturnType<typeof HTMLAnchorElement>;
export type MapReturnType = ReturnType<typeof Map>;
type ObjectReturnType = ReturnType<typeof Object>;
type LayerReturnType = ReturnType<typeof String> | ReturnType<typeof LayerGroup> | number | ReturnType<typeof Object.Number>| ReturnType<typeof Point>;

// typescript 2304
 NewClass = function(){};

export const DemoFunction:GeoJSONReturnType = GeoJSONFunction.extend({

	try{
			// @function extend(props: Object): Function
	// [Extends the current class](#class-inheritance) given the properties to be included.
	// Returns a Javascript function that is a class constructor (to be called with `new`).
	NewClass = function (): HTMLAnchorElementReturnType {

		// name is deprecated typescript 2304
		// init(name:string):void

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	// typescript 2304 prototype-based programming paradigm
	// Object.setPrototypeOf(NewClass,GeoJSONFunction);

	NewClass = Object.prototype.__proto__;

	const parentProto = NewClass.__super__ = this.prototype;

	let proto = Util.create(parentProto);
	
	proto.constructor = NewClass;
	NewClass.prototype = proto;
// inherit parent's statics
	for (let i in this) {
		if (Object.prototype.hasOwnProperty.call(this, i) && i !== 'prototype' && i !== '__super__') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		Util.extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		checkDeprecatedMixinEvents(props.includes);
		Util.extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (proto.options) {
		props.options = Util.extend(Util.create(proto.options), props.options);
	}

	// mix given properties into the prototype
	Util.extend(proto, props:[]);

	proto._initHooks = [];

	// add method for calling all hooks

try{

	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parentProto.callInitHooks) {
			parentProto.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (let i in proto._initHooks) {
			proto._initHooks[i].call(this);
		}
	};

}catch(ex){

}finally{

}

	}catch(){

		throw new Exception("typescript prototype paradigm Exception");

	}finally{
return NewClass;
	}

	

}

);





// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
GeoJSONAbstractClass.include = function (props:GeoJSONReturnType[]):DemoAbstractClassImpl {
	Util.extend(this.prototype, props);
	return this;
};

// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
GeoJSONAbstractClass.mergeOptions = function (options:GeoJSONReturnType[]):DemoAbstractClassImpl {
	Util.extend(this.prototype.options, options);
	return this;
};

// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
GeoJSONAbstractClass.addInitHook = function (fn:FunctionReturnType):DemoAbstractClassImpl { // (Function) || (String, args...)
	const args = Array.prototype.slice.call(arguments, 1);

	const init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
	return this;
};

function checkDeprecatedMixinEvents(includes:GeoJSONReturnType[]) {

	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }

	includes = Util.isArray(includes) ? includes : [includes];

	for (let i in includes) {
		if (includes[i] === L.Mixin.Events) {
			console.warn('Deprecated include of L.Mixin.Events: ' +
				'this property will be removed in future releases, ' +
				'please inherit from L.Evented instead.', new Error().stack);
		}
	}
	
}


