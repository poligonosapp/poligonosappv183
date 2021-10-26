import _ from 'lodash';

console.log(_.join(['./TokenComponent', 'module', 'loaded!'], ' '));
console.log(_.join(['./Token', 'module', 'loaded!'], ' '));
console.log(_.join(['./Pipeline', 'module', 'loaded!'], ' '));
console.log(_.join(['./OctokitAppServer', 'module', 'loaded!'], ' '));
console.log(_.join(['./TokenAtlassian', 'module', 'loaded!'], ' '));
console.log(_.join(['./TokenPlugin', 'module', 'loaded!'], ' '));
console.log(_.join(['./ObjectRules', 'module', 'loaded!'], ' '));
console.log(_.join(['./TokenRealm', 'module', 'loaded!'], ' '));

import PoligonosApp, { MapReturnType, polygonsArray, PoligonosAppReturnType } from "./PoligonosApp";
import React, {Component, useState, useEffect} from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import {PoligonosAppComponent} from "./PoligonosAppComponent";
import {TokenComponent} from "./TokenAppComponent";
import Realm from "realm";
import ReactDOMServer from 'react-dom/server';

import { Map, Layer, Canvas, tileLayer, geoJSON, Polygon } from '../Leaflet';
// import { MapReturnType } from "./layer/GeoJSONFunction";

import {Response} from "express";

import {ReturnType} from "typescript";

// import {Promise} from "typescript";

type ResponseReturnType = ReturnType<typeof Response>;
// type PoligonosAppReturnType = ReturnType<typeof PoligonosApp>;



import loadable from '@loadable/component';// https://github.com/gregberge/loadable-components

// const OtherComponent = loadable(() => import('./OtherComponent'));

import token from './Token';

export interface Props{
    this: PoligonosAppReturnType,
    polygons: Promise<PoligonosAppReturnType>[];
    mapConst: Promise<MapReturnType>;
    leafletTokenGitHub: Promise<string>;
    leafletTokenAtlassian: Promise<string>;
    src : string;
    loading: boolean;
    // a:'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
    // s:string;
}

function App (props:Props){

        this.props.mapConst = useEffect(
            () => {
                await github();
                this.props.mapConst.renderer();
                this.props.mapConst = await atlassian();
                this.props.mapConst.renderer();
                await realm();
            }
        );
        // showMap();

        // const a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
        // this.props.a  = a;

        await fun(props);

        const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
        

        // this.mapConst = this.state.mapConst;

        
            // github();
        
            // atlassian();


    // } // end constructor

    

    public const mapConst: MapReturnType[] = new PoligonosApp().L.Map('map', {
        renderer: PoligonosApp.L.canvas()
    });

    function github():Promise<typeof PoligonosApp> {

        // const [leafletTokenGitHub, useState]:Promise<string> = this.setState({leafletTokenGitHub:this.props.children});
        
        this.props.leafletTokenGitHub = await import("./Token").then(token => {
                token().toPromise();
            });

        if(!leafletTokenGitHub){
            return;
        }
        $( "button" ).on( "click", function() {
            $( "p" ).append( "Started..." );
           
            $( "div" ).each(function( i ) {
              $( this ).fadeIn().fadeOut( 1000 * ( i + 1 ) );
            });
           
            $( "div" ).promise().done(function() {
              $( "p" ).append( " Finished! " );
            });
          });

        this.props.leafletTokenGitHub = await require('./Token').token().toPromise().then(
function (response:ResponseReturnType) {
return response;
}
        ).then(
            function () {
console.log("then then");
            }
        );
        const s = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='.concat(leafletTokenGitHub);

        const p = new PoligonosApp().L.tileLayer(s, {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/light-v9',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(this.props.mapConst);

        p.addEventListener();

        this.state.polygons.add(p);

        return s;

    } // end github function


        function atlassian():Promise<typeof PoligonosApp> {
            
        // const [leafletTokenAtlassian, useState]:Promise<string> = this.setState({leafletTokenAtlassian:this.props.children});
            
    this.props.leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise();
    const s = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='.concat(this.props.leafletTokenAtlassian);

    const p = new PoligonosApp().L.tileLayer(s, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(this.props.mapConst);

    this.state.polygons.add(p);

    return p;




        } // end atlassian function

        const ul = (
            <ul>
            <li>
                {
                    
                        this.props.polygons.renderer()
                    
                }
            </li>
        </ul>
        );

    

        // const [leafletTokenGitHub, useState]:Promise<string> = this.setState({leafletTokenGitHub:this.props.children});
        // const [leafletTokenAtlassian, useState]:Promise<string> = this.setState({leafletTokenAtlassian:this.props.children});

        // this.mapConst = await this.github();
        // this.mapConst = await this.atlassian();
        
        // realm();

        // showMap();

        <PoligonosAppComponent ul={ul}>
        PoligonosAppComponent
        </PoligonosAppComponent>


        return (setInterval(tick(), 1000));
    };


function tick():void{

    for(const i in this.props.polygons){
        this.props.polygons[i].renderer();
    }

    const element = (<div>PoligonosApp</div>);

    ReactDOM.render(element, document.getElementById('map'));

}

// async function funPromise():Promise<Response<string>>{
    // typescript 2520
    // const {Promise} = require("typescript");
    // return new Promise()<Response<string>>;
// }

async function fun(props:Props){

    this.props.leafletTokenGitHub = await require('./Token').token();

    this.state.leafletTokenAtlassian =  await require('./Pipeline').pipeline().toPromise().then().then(),
    const p = PoligonosApp().L.Map('map', {
        renderer: PoligonosApp.L.canvas()
    });
    
    p.addEventListener();

    this.state.polygons.add(p);
    return props;
};

export default App;

function realm():Promise<string> {
    const realm = require('./ObjectRules');
    return await require('./TokenRealm').token().toPromise();
}

} // end class App

import { ChunkExtractor } from '@loadable/server';
// This is the stats file generated by webpack loadable plugin
const statsFile = path.resolve('../dist/loadable-stats.json');
// We create an extractor from the statsFile
const extractor = new ChunkExtractor({ statsFile });
// Wrap your application using "collectChunks"
const jsx = extractor.collectChunks(<App polygons={[]} mapConst={undefined} leafletTokenGitHub={undefined} leafletTokenAtlassian={undefined} src={'./polygons.geojson'} loading={false} />);
// Render your application
const html = ReactDOMServer.renderToString(jsx);
// You can now collect your script tags
const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
// You can also collect your "preload/prefetch" links
const linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();
// And you can even collect your style tags (if you use "mini-css-extract-plugin")
const styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();

import * as component from '@loadable/component';
import path from 'path';
// import { hydrate } from 'react-dom';
component.loadableReady(() => {
  
  const root = document.getElementById('main');

  hydrate(<App polygons={[]} mapConst={undefined} leafletTokenGitHub={undefined} leafletTokenAtlassian={undefined} src={'./polygons.geojson'} loading={true}><TokenComponent></TokenComponent></App>, root);

});




