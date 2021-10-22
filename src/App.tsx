// import PoligonosApp from "./PoligonosApp";
import React, {Component, useState, useCallback} from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';

import Realm from "realm";

import { PoligonosApp, Map, Layer, Canvas, tileLayer, geoJSON, Polygon } from '../Leaflet';
import { MapReturnType } from "./layer/GeoJSONFunction";

import {Response} from "express";

import {ReturnType} from "typescript";

// import {Promise} from "typescript";

type ResponseReturnType = ReturnType<typeof Response>;

import _ from 'lodash';

console.log(_.join(['./Token', 'module', 'loaded!'], ' '));
console.log(_.join(['./Pipeline', 'module', 'loaded!'], ' '));
console.log(_.join(['./OctokitAppServer', 'module', 'loaded!'], ' '));
console.log(_.join(['./TokenAtlassian', 'module', 'loaded!'], ' '));
console.log(_.join(['./TokenPlugin', 'module', 'loaded!'], ' '));
console.log(_.join(['./ObjectRules', 'module', 'loaded!'], ' '));
console.log(_.join(['./TokenRealm', 'module', 'loaded!'], ' '));

import loadable from '@loadable/component';// https://github.com/gregberge/loadable-components

// const OtherComponent = loadable(() => import('./OtherComponent'));

import token from './Token';

interface Props{
    mapConst: Promise<MapReturnType>;
    leafletTokenGitHub: Promise<string>;
    leafletTokenAtlassian: Promise<string>;
    src : string;
    // a:'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
    // s:string;
}

class App extends React.Component{

    constructor(props:Props){
        super(props);
        // const a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
        // this.props.a  = a;

        await fun(props);
        

        // this.mapConst = this.state.mapConst;

        
            // github();
        
            // atlassian();


    } // end constructor

    leafletTokenGitHub: Promise<string>;

    public const mapConst: MapReturnType[] = new PoligonosApp().L.Map('map', {
        renderer: PoligonosApp.L.canvas()
    });

    // mapConst.map(x=>x){}

    // let token:string;
    // let tokenAtlassian:string;
    // let a:string;
    // let s:string;

    function github():Promise<string> {
        
        leafletTokenGitHub = await import("./Token").then(token => {
                token().toPromise();
            });

        if(leafletTokenGitHub){
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
        leafletTokenGitHub = await require('./Token').token().toPromise().then(
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
        }).addTo(this.mapConst);
    }


        function atlassian():Promise<string> {
            
try{
    leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise();
    const s = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='.concat(this.props.leafletTokenAtlassian);

    const p = new PoligonosApp().L.tileLayer(s, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(this.mapConst);
}catch(e){
        return throw new Exception("es5 promise exception");
}finally{

}


        }

    render(){

        const a = await this.github();
        const b = await this.atlassian();
        
        realm();

        showMap();


        return (setInterval(tick(this.state), 1000));
    };


function tick(thisstate: Readonly<{}>: undefined: undefined):void{
    const element = (<div>PoligonosApp {this.state.mapConst} </div>);
    ReactDOM.render(element, document.getElementById('map'));
}

// async function funPromise():Promise<Response<string>>{
    // typescript 2520
    // const {Promise} = require("typescript");
    // return new Promise()<Response<string>>;
// }

async function fun(props:Props){

    leafletTokenGitHub = await require('./Token').token();

    props.leafletTokenAtlassian =  await require('./Pipeline').pipeline().toPromise().then().then(),
    props.mapConst = new PoligonosApp().L.Map('map', {
        renderer: PoligonosApp.L.canvas()
    })
    return props;
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;

function realm():Promise<string> {
    const poligono = require('./ObjectRules');
    const realm = await Realm.open({
        path: "myrealm",
        schema: [poligono],
      });
      
    return require('./TokenRealm').token();
}


    async function showMap():Promise<string>{
        leafletTokenGitHub = await require('./Token').token().toPromise().then(
            function (response:ResponseReturnType) {
            return response;
            }
                    ).then(
                        function () {
            console.log("then then");
                        }
                    );

                    if(leafletTokenGitHub){
                        return leafletTokenGitHub;
                    }

        const leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise().then().then();
        if(leafletTokenAtlassian){
            return leafletTokenAtlassian;
        }
        // return undefined;
    }

} // end class App

import { ChunkExtractor } from '@loadable/server';
// This is the stats file generated by webpack loadable plugin
const statsFile = path.resolve('../dist/loadable-stats.json');
// We create an extractor from the statsFile
const extractor = new ChunkExtractor({ statsFile });
// Wrap your application using "collectChunks"
const jsx = extractor.collectChunks(<App />);
// Render your application
const html = renderToString(jsx);
// You can now collect your script tags
const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
// You can also collect your "preload/prefetch" links
const linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();
// And you can even collect your style tags (if you use "mini-css-extract-plugin")
const styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();

import * as component from '@loadable/component';
import path from 'path';
component.loadableReady(() => {
  const root = document.getElementById('main')
  hydrate(<App />, root)
})
function renderToString(jsx: any) {
    throw new Error('Function not implemented.');
}
