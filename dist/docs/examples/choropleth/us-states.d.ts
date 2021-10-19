declare const statesData: {
    type: string;
    features: ({
        type: string;
        id: string;
        properties: {
            name: string;
            density: number;
        };
        geometry: {
            type: string;
            coordinates: number[][][];
        };
    } | {
        type: string;
        id: string;
        properties: {
            name: string;
            density: number;
        };
        geometry: {
            type: string;
            coordinates: number[][][][];
        };
    })[];
};
