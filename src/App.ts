// import PoligonosApp from "./PoligonosApp";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { PoligonosApp, Map, Layer, Canvas, tileLayer, geoJSON, Polygon } from './Leaflet';
import { MapReturnType } from "./layer/GeoJSONFunction";

interface Props{
    leafletTokenGitHub: Promise<string>;
    leafletTokenAtlassian: Promise<string>;
    static a:'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
    s:string;
}

class App extends React.Component{

    public const map: MapReturnType = PoligonosApp.L.Map('map', {
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

        try{
            this.github(this.props.a);
        }catch{
            this.atlassian(this.props.a);
        }finally{

        }


        private atlassian(a: string): void {
            
            this.props.leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise();

            s = a.concat(this.state.props.leafletTokenAtlassian);

            L.tileLayer(s, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);
        }

        private github(a: string) {
            this.props.leafletTokenGitHub = await require('./Token').token().toPromise();
            s = a.concat(this.state.leafletTokenGitHub);

            L.tileLayer(s, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);
        }
    } // end constructor

this.setState(
    async function showMap():void{
        this.state.props.leafletTokenGitHub = await require('./Token').token().toPromise();
        this.state.props.leafletTokenAtlassian = await require('./Pipeline').pipeline().toPromise();
    }
);

    render(){
        return (<div>PoligonosApp {this.state.props.children}<div>);
    }
} // end class App

ReactDOM.render(
    <App />,
    document.getElementById('root')
);