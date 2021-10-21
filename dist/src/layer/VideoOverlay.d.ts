import { ReturnType } from 'typescript';
import { LatLngBoundsClass } from "src/geo/LatLngBoundsClass";
import { LatLngBoundsFunction } from "src/geo/LatLngBoundsFunction";
declare type LatLngBoundsReturnType = ReturnType<typeof LatLngBoundsClass | typeof LatLngBoundsFunction>;
declare type VideoReturnType = ReturnType<typeof String | typeof Array | typeof HTMLVideoElement>;
export declare const VideoOverlay: any;
export declare function videoOverlay(video: VideoReturnType | VideoReturnType[], bounds: LatLngBoundsReturnType, options: VideoReturnType): VideoReturnType;
export {};
