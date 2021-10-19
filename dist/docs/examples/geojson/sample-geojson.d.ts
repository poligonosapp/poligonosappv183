declare var freeBus: {
    type: string;
    features: {
        type: string;
        geometry: {
            type: string;
            coordinates: number[][];
        };
        properties: {
            popupContent: string;
            underConstruction: boolean;
        };
        id: number;
    }[];
};
declare var lightRailStop: {
    type: string;
    features: {
        type: string;
        properties: {
            popupContent: string;
        };
        geometry: {
            type: string;
            coordinates: number[];
        };
    }[];
};
declare var bicycleRental: {
    type: string;
    features: {
        geometry: {
            type: string;
            coordinates: number[];
        };
        type: string;
        properties: {
            popupContent: string;
        };
        id: number;
    }[];
};
declare var campus: {
    type: string;
    properties: {
        popupContent: string;
        style: {
            weight: number;
            color: string;
            opacity: number;
            fillColor: string;
            fillOpacity: number;
        };
    };
    geometry: {
        type: string;
        coordinates: number[][][][];
    };
};
declare var coorsField: {
    type: string;
    properties: {
        popupContent: string;
    };
    geometry: {
        type: string;
        coordinates: number[];
    };
};
