import { Point } from '../../geometry/Point';
import { Object, ReturnType } from 'typescript';
declare type PointReturnType = ReturnType<typeof Point.prototype.clone> | number | ReturnType<typeof Object.Number> | ReturnType<typeof Point>;
export declare const LonLat: {
    project: (latlng: any) => PointReturnType;
    unproject: (point: PointReturnType) => any;
    bounds: any;
};
export {};
