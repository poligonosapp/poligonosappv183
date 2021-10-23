import React, {Component, useState} from "react";
import { ReactDOM } from "react-dom";
import { ReactDOMServer } from "react-dom/server";

import {HTMLElement} from "typescript";
import { node } from "webpack";

interface Props{
    ul:HTMLElement;
}

class PoligonosAppComponent extends React.Component{

    constructor(props:Props){

        super(props);

        // this.state = {ul: props.ul};
        // this.setState(props.ul);
    }

    render(){

        const [ul, useState]:HTMLElement = this.setState({ul:this.props.children});

        return (<div>{this.props.children}</div>);
    }
}

ReactDOM.render(<PoligonosAppComponent/>, node); // browser
ReactDOMServer.renderToString(<PoligonosAppComponent/>); // server

export default PoligonosAppComponent;