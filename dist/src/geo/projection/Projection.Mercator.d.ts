import { LatLngFunction } from '../LatLngFunction';
import { PointReturnImpl } from 'src/geometry/PointReturnImpl';
declare type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngFunction.prototype.clone>;
export declare const Mercator: {
    R: number;
    R_MINOR: number;
    bounds: any;
    project: (latlng: LatLngReturnType) => any;
    unproject: (point: PointReturnImpl) => LatLngReturnType;
};
export {};
