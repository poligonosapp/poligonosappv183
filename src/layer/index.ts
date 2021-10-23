export {LayerFunction as Layer} from './Layer';
export {LayerGroup, layerGroup} from './LayerGroup';
export {FeatureGroup, featureGroup} from './FeatureGroup';
import {GeoJSONFunction, geoJSON, geoJson, geometryToLayer, coordsToLatLng, coordsToLatLngs, latLngToCoords, latLngsToCoords, getFeature, asFeature} from './GeoJSONFunction';
GeoJSONFunction.geometryToLayer = geometryToLayer;
GeoJSONFunction.coordsToLatLng = coordsToLatLng;
GeoJSONFunction.coordsToLatLngs = coordsToLatLngs;
GeoJSONFunction.latLngToCoords = latLngToCoords;
GeoJSONFunction.latLngsToCoords = latLngsToCoords;
GeoJSONFunction.getFeature = getFeature;
GeoJSONFunction.asFeature = asFeature;
export {GeoJSONFunction as GeoJSON, geoJSON, geoJson};

export {ImageOverlay, imageOverlay} from './ImageOverlay';
export {VideoOverlay, videoOverlay} from './VideoOverlay';
// export {SVGOverlay, svgOverlay} from './SVGOverlay';

export {DivOverlay} from './DivOverlay';
export {Popup, popup} from './Popup';
export {Tooltip, tooltip} from './Tooltip';

export * from './marker/index';
export * from './tile/index';
export * from './vector/index';
