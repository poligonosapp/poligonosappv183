import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class MyComponent extends React.Component {
  render() {
    return ("<div>Hello World</div>");
  }
}

ReactDOM.render(<MyComponent />, node);