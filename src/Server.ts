/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// 'use strict'; // eslint https://stackoverflow.com/questions/32791507/node-js-and-eslint-disagree-on-use-strict

import {GeoJSONAbstractClass, map} from "./Leaflet";
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
import {Point} from "./geometry";
type StringReturnType = ReturnType<typeof  Point.prototype.toString>;
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

function serve(): void | GeoJSONAbstractClass | StringReturnType {



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

            // console.log((6%2 == 0));

            // const option:boolean = (6%2 == 0);

            let token:string;
            let a:string;
            let s:string;
// Octokit pipeline parser
            token = require('./Token');

            a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';

            s = a.concat(token);

            L.tileLayer(s, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);
// Atlassian pipeline parser
            token = require('./Pipeline');

            a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';

            s = a.concat(token);

            L.tileLayer(s, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);

    

        // typescript 2304 cannot find name 'res'
        // res.json({success:true});


    }//end try res get
    catch (e) {
        // typescript error TS1044
        // const result = (e as Exception).Message;

        // console.log(result);

        throw new Exception("TYPESCRIPT: LEAFLET TOKEN NOT FOUND");

    } finally {

        app.listen(PORT, HOST);
        console.log(`Running on http://${HOST}:${PORT}`);

    }

    //}

} // end function serve




function atlassianFunction(a: string, token: string, L: any, s: string, map: any) {
    token = require('./Pipeline');

    // eslint-disable-next-line no-case-declarations
    a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
    // const b1 = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    // eslint-disable-next-line no-case-declarations
    s = a.concat(token);

    L.tileLayer(s, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);
    return a;
}
// export default serve;

