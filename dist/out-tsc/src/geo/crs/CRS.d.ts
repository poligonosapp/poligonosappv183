export declare const CRS: {
    latLngToPoint: (latlng: any, zoom: any) => any;
    pointToLatLng: (point: any, zoom: any) => any;
    project: (latlng: any) => any;
    unproject: (point: any) => any;
    scale: (zoom: any) => number;
    zoom: (scale: any) => number;
    getProjectedBounds: (zoom: any) => any;
    infinite: boolean;
    wrapLatLng: (latlng: any) => any;
    wrapLatLngBounds: (bounds: any) => any;
};
