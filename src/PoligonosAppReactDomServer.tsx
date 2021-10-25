import React from 'react';
import ReactDOMServer from 'react-dom/server';


    class PoligonosAppReactDomServer extends React.Component {
        render() {
        return ("<div>Hello World ReactDOMServer</div>");
    }
}

ReactDOMServer.renderToString(<PoligonosAppReactDomServer />);

export default PoligonosAppReactDomServer;