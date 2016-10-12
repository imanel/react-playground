import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'default state',
      cat: 0
    }
  }

  update(event) {
    this.setState({ txt: event.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{ this.state.txt }</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App cat={5}  />,
  document.getElementById('app')
);
