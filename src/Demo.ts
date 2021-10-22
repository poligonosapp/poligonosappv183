/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//canvas
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { MapReturnType } from "./layer/GeoJSONFunction";
import { PoligonosApp } from "./Leaflet";

const data: PoligonosApp.L.Polygon[] = require("./polygons.geojson");

public const map: MapReturnType = PoligonosApp.L.Map('map', {
	renderer: PoligonosApp.L.canvas()
});

function Demo():void{
	
	  L.geoJSON(data, {
		 style: function (feature:LayerReturnType) {
			 return {color: feature.properties.color};
		 }
	 }).bindPopup(function (layer:LayerReturnType) {
		 return layer.feature.properties.description;
	 }).addTo(map);
}