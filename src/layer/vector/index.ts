export {Renderer} from './Renderer';
export {Canvas, canvas} from './Canvas';
import './Renderer.getRenderer';	// This is a bit of a hack, but needed because circular dependencies

export {PathFunction as Path} from './PathFunction';
export {CircleMarker, circleMarker} from './CircleMarker';
export {Circle, circle} from './Circle';
export {PolylineClass as Polyline, polyline} from './PolylineFunction';
export {PolygonClass as Polygon, polygon} from './Polygon';
export {Rectangle, rectangle} from './Rectangle';
