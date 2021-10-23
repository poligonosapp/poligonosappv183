import {LatLngFunction} from '../LatLngFunction';
import { Bounds } from "../../geometry/Bounds.1";
import {PointFunction} from '../../geometry/PointFunction';

import { PointReturnImpl } from "src/geometry/PointReturnImpl";
type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngFunction.prototype.clone>;

/**
 * CRS helper
*/
export function projection(){

}

projection.prototype = {
    project: function(latlng:LatLngReturnType):PointReturnImpl{
        return new PointFunction(latlng.y, latlng.x);
    },
    unproject: function(latlng:LatLngReturnType):PointReturnImpl{
        return new PointFunction(latlng.x, latlng.y);
    }
}