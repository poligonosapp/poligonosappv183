import { ReturnType } from 'typescript';
import { LatLngBounds } from "../geo";
declare type LatLngBoundsReturnType = ReturnType<typeof LatLngBounds>;
declare type VideoReturnType = ReturnType<typeof String | typeof Array | typeof HTMLVideoElement>;
export declare const VideoOverlay: any;
export declare function videoOverlay(video: VideoReturnType | VideoReturnType[], bounds: LatLngBoundsReturnType, options: VideoReturnType): VideoReturnType;
export {};
