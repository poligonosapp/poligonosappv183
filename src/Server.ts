/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/require-await */
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

import Exception from "typescript";

async function serve(): Promise<void | GeoJSONAbstractClass | StringReturnType> {

    const {MapReturnType} = require("./layer/GeoJSONFunction");

    console.log(`\n...\n`);

    const {L, Map, Layer, Canvas, tileLayer, geoJSON, Polygon} = require('./Leaflet');

    const {PoligonosApp} = require('./PoligonosApp');

    const {Response, Request, Router} = require('express');

    const Exception = require('typescript');

    const router = Router();

    const bodyParser = require('body-parser');

    // Constants
    const PORT = 8080;
    const HOST = 'https://poligonosapp-v1-7-2.netlify.app/';

    // App
    const express = require('express');
    const app = express();

    console.log(`\n...\n`);

    // https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript/54649617
    try {

        // router.get('/', (req: Request, res: Response): void => {});

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
            let tokenAtlassian:string;
            let a:string;
            let s:string;
            let sAtlassian:string;
// Octokit pipeline parser
            token = await require('./Token').token();
            tokenAtlassian = await require('./Pipeline').pipeline();

            a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';

            s = a.concat(token);
            sAtlassian = a.concat(tokenAtlassian);

            L.tileLayer(s, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);

        

    }catch {

        // if(error instanceof TypeError){
                    // Atlassian pipeline parser
        // tokenAtlassian = require('./Pipeline');

        // a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';

        tokenAtlassian = await require('./Pipeline').pipeline();
        sAtlassian = a.concat(tokenAtlassian);

        L.tileLayer(sAtlassian, {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/light-v9',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);

        throw new Exception("TYPESCRIPT: LEAFLET TOKEN NOT FOUND");
        // }

    } finally {

        app.listen(PORT, HOST);
        console.log(`Running on http://${HOST}:${PORT}`);

    }

} // end function serve


