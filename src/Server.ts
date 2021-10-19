/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// 'use strict'; // eslint https://stackoverflow.com/questions/32791507/node-js-and-eslint-disagree-on-use-strict

import {GeoJSONAbstractClass, map} from "./Leaflet";
// import {MapReturnType} from "./layer/GeoJSON";
import Exception from "typescript";

// require('./src/Leaflet.ts');

// const L.PoligonosApp = require('poligonosapp');
// L.PoligonosApp();

// import express from 'express';
// export require('iconv').Iconv;
// const express = require('express');

// import {L.PoligonosApp} from './PoligonosApp';

// import {Response , Request, Router} from 'express';

// import {Exception} from 'typescript';

// const router = Router();

// const bodyParser = require('body-parser');

// const {GeoJSONAbstractClass, map} = require("./Leaflet");

function serve(): void | GeoJSONAbstractClass | String {

    const {MapReturnType} = require("./layer/GeoJSON");

    console.log(`\n...\n`);

    const {L, Map, Layer, Canvas, tileLayer, geoJSON, Polygon} = require('./Leaflet.ts');

    const {PoligonosApp} = require('./PoligonosApp');

    const {Response, Request, Router} = require('express');

    const Exception = require('typescript');

    const router = Router();

    const bodyParser = require('body-parser');

    // Constants
    const PORT = 8080;
    const HOST = '0.0.0.0';

    // App
    const express = require('express');
    const app = express();

    console.log(`\n...\n`);

    // https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript/54649617
    try {

        router.get('/', (req: Request, res: Response): void => {

            // res.json({success:true});
            // res.send('PoligonosApp');
            // res.sendFile('./polygons.geojson');
            // res.json('./polygons.geojson');
            // require('./Leaflet.ts'); // L.PoligonosApp();
            // require('./PoligonosApp.ts');
            const polygons = L.Polygon('./polygons.geojson');

            //canvas
            // @ts-ignore
            public const map: MapReturnType = L.Map('map', {
                renderer: L.canvas()
            });

            polygons.addTo(map);

            console.log((2%0 == 0));

            const option:boolean = (2%0 == 0);

            switch (option) {
                case false:
                    // eslint-disable-next-line no-case-declarations
                    const token1:string = require('./Pipeline');

                    // eslint-disable-next-line no-case-declarations
                    const a1 = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
                    // const b1 = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

                    // eslint-disable-next-line no-case-declarations
                    const s1:string = a1.concat(token1);

                    L.tileLayer(s1, {
                        maxZoom: 18,
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                        id: 'mapbox/light-v9',
                        tileSize: 512,
                        zoomOffset: -1
                    }).addTo(map);

                    //});
                    break;
                case true:
                    const token2:string = require('./Token');

                    const a2:string = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
                    // const b2 = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

                    const s2:string = a2.concat(token2);

                    L.tileLayer(s2, {
                        maxZoom: 18,
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                        id: 'mapbox/light-v9',
                        tileSize: 512,
                        zoomOffset: -1
                    }).addTo(map);

                    break;
            } // end switch

        }); // end res.get

        // typescript 2304 cannot find name 'res'
        // res.json({success:true});


    }//end try res.get
    catch (e) {
        // typescript error TS1044
        // const result = (e as Exception).Message;

        // console.log(result);

        throw new Exception("LEAFLET TOKEN NOT FOUND");

    } finally {

        app.listen(PORT, HOST);
        console.log(`Running on http://${HOST}:${PORT}`);

    }

    //}

} // end function serve


// export default serve;

