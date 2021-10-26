/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GeoJSONAbstractClass } from "../../Leaflet";
import { GeoJSONReturnType } from "./HandlerFunction";

/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/
// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers


export abstract class HandlerAbstractClass extends GeoJSONAbstractClass{
	props: GeoJSONReturnType;
	constructor(props: GeoJSONReturnType) {
		super(props);
		this.props = props;

	}
}
