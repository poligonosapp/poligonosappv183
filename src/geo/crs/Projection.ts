import {LatLngFunction} from '../LatLngFunction';
import { Bounds } from "../../geometry/Bounds.1";
import {Point} from '../../geometry/Point';

import { PointReturnImpl } from "src/geometry/PointReturnImpl";
type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngFunction.prototype.clone>;

/**
 * CRS helper
*/
export function projection(){

}

projection.prototype = {
    project: function(latlng:LatLngReturnType):PointReturnImpl{
        return new Point(latlng.y, latlng.x);
    },
    unproject: function(latlng:LatLngReturnType):PointReturnImpl{
        return new Point(latlng.x, latlng.y);
    }
}