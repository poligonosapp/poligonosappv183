import React from 'react';
import ReactDOMServer from 'react-dom/server';

    export class MyComponent extends React.Component {
        render() {
        return ("<div>Hello World ReactDOMServer</div>");
    }
}

ReactDOMServer.renderToString(<MyComponent />);