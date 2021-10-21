/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//canvas
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
public const map: MapReturnType = PoligonosApp.L.Map('map', {
	renderer: PoligonosApp.L.canvas()
});

import { PoligonosApp } from "./Leaflet";
import data from "./polygons.geojson";

  L.geoJSON(data, {
 	style: function (feature:LayerReturnType) {
 		return {color: feature.properties.color};
 	}
 }).bindPopup(function (layer:LayerReturnType) {
 	return layer.feature.properties.description;
 }).addTo(map);