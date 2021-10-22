// import PoligonosApp from "./PoligonosApp";
import React, {Component, useState, useCallback} from 'react';
import ReactDOM, { render } from 'react-dom';

import { PoligonosApp, Map, Layer, Canvas, tileLayer, geoJSON, Polygon } from './Leaflet';
import { MapReturnType } from "./layer/GeoJSONFunction";

import {Response} from "express";

// import {Promise} from "typescript";

type ResponseReturnType = ReturnType<typeof Response>;

interface Props{
    mapConst: MapReturnType;
    leafletTokenGitHub: Promise<string>;
    leafletTokenAtlassian: Promise<string>;
    src : string;
    // a:'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
    // s:string;
}

class App extends React.Component{



    let leafletTokenGitHub: string | Promise<string>;

    public const mapConst: MapReturnType[] = new PoligonosApp().L.Map('map', {
        renderer: PoligonosApp.L.canvas()
    });

    // mapConst.map(x=>x){}

    // let token:string;
    // let tokenAtlassian:string;
    // let a:string;
    // let s:string;

    constructor(props:Props){
        super(props);
        // const a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
        // this.props.a  = a;

        await fun(props);
        

        // this.mapConst = this.state.mapConst;

        
            // github();
        
            // atlassian();


    } // end constructor

    private github() {
        // this.props.leafletTokenGitHub = await require('./Token').token().toPromise();
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


        private atlassian(): void {
            
            // this.state.leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise();

            const s = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='.concat(this.props.leafletTokenAtlassian);

            const p = new PoligonosApp().L.tileLayer(s, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(this.mapConst);
        }

    render(){

        this.github();
        this.atlassian();

        this.setState(
            async function showMap():void{
                leafletTokenGitHub = await require('./Token').token().toPromise().then(
                    function (response:ResponseReturnType) {
                    return response;
                    }
                            ).then(
                                function () {
                    console.log("then then");
                                }
                            );


                const leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise().then().then();
            }
        );


        return (setInterval(tick(this.state), 1000));
    }
} // end class App

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
    props.leafletTokenGitHub = await require('./Token').token().toPromise()
    .then(
        function (response:ResponseReturnType) {
        return response;
        }
                ).then(
                    function () {
        console.log("then then");
                    }
                );
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