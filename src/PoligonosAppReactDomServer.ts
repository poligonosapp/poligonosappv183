const React = require('react');

    // const React = require('react');
    const ReactDOMServer = require('react-dom/server');

    export class MyComponent extends React.Component {
        render() {
        return <div>Hello World ReactDOMServer</div>;
    }
}

ReactDOMServer.renderToString(<MyComponent />);