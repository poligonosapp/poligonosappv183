// import PoligonosApp from "./PoligonosApp";
import React, {Component, useState} from 'react';
import ReactDOM, { render } from 'react-dom';

import { PoligonosApp, Map, Layer, Canvas, tileLayer, geoJSON, Polygon } from './Leaflet';
import { MapReturnType } from "./layer/GeoJSONFunction";

interface Props{
    leafletTokenGitHub: Promise<string>;
    leafletTokenAtlassian: Promise<string>;
    static a:'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
    s:string;
}

class App extends React.Component{

    public const mapConst: MapReturnType = new PoligonosApp().L.Map('map', {
        renderer: PoligonosApp.L.canvas()
    });

    // let token:string;
    // let tokenAtlassian:string;
    // let a:string;
    // let s:string;

    constructor(props:Props){
        super(props);
        // const a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
        // this.props.a  = a;

        this.state = {
            leafletTokenGitHub: await require('./Pipeline').pipeline().toPromise(),
            leafletTokenAtlassian: await require('./Pipeline').pipeline().toPromise(),
            mapConst: new PoligonosApp().L.Map('map', {
                renderer: PoligonosApp.L.canvas()
            })
        }

        
            // github();
        
            // atlassian();


    } // end constructor

    private github() {
        // this.props.leafletTokenGitHub = await require('./Token').token().toPromise();
        this.props.s = this.props.a.concat(this.state.leafletTokenGitHub);

        PoligonosApp.L.tileLayer(this.props.s, {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/light-v9',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mapConst);
    }


        private atlassian(): void {
            
            // this.state.leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise();

            this.props.s = this.props.a.concat(this.state.leafletTokenAtlassian);

            new PoligonosApp().L.tileLayer(this.props.s, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(mapConst);
        }


    



    render(){

        this.github();
        this.atlassian();

        this.setState(
            async function showMap():void{
                this.state.props.leafletTokenGitHub = await require('./Token').token().toPromise();
                this.state.props.leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise();
            }
        );


        return (<div>PoligonosApp {this.state.mapConst}<div>);
    }
} // end class App

ReactDOM.render(
    <App />,
    document.getElementById('root')
);