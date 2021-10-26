import React, {Component, useState, useEffect} from "react";
import { ReactDOM } from "react-dom";
import { ReactDOMServer } from "react-dom/server";

import {HTMLElement} from "typescript";
import { node } from "webpack";

export interface Props{
    ul:HTMLElement;
}

function PoligonosAppComponent(props:Props["ul"]){

        const [ul, useState]:HTMLElement = this.setState({ul:this.props.children});

        return (<div>{this.props.children.ul}</div>);
    
}

ReactDOM.render(<PoligonosAppComponent/>, node); // browser
ReactDOMServer.renderToString(<PoligonosAppComponent/>); // server

export default PoligonosAppComponent;