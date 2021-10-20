import { LatLngFunction } from '../LatLngFunction';
declare type LatLngReturnType = ReturnType<typeof LatLngFunction> | ReturnType<typeof LatLngFunction.prototype.clone>;
export declare const SphericalMercator: {
    R: number;
    MAX_LATITUDE: number;
    project: (latlng: LatLngReturnType) => any;
    unproject: (point: any) => any;
    bounds: any;
};
export {};
