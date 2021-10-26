import React, {Component, useState, useEffect} from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';

import PoligonosApp, { MapReturnType, polygonsArray, PoligonosAppReturnType } from "./PoligonosApp";

interface Props{
    polygons: Promise<PoligonosAppReturnType>[];
    mapConst: Promise<MapReturnType>;
    leafletTokenGitHub: Promise<string>;
    leafletTokenAtlassian: Promise<string>;
    src : string;
    // a:'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
    // s:string;
}

function TokenComponent(props: Props) {

        const ul = (
            <ul>
            <li>
                {
                    
                        this.props.polygons.renderer()
                    
                }
            </li>
        </ul>
        );

        return (<div>{ul}</div>);

    }// end function TokenComponent

    

    export default TokenComponent;
