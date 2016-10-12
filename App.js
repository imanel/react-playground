import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: '',
      cat: 0
    }
    this.update = this.update.bind(this)
  }

  update(event) {
    this.setState({ txt: event.target.value })
  }

  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{ props.txt }</h1>
    </div>
  )
}

ReactDOM.render(
  <App cat={5}  />,
  document.getElementById('app')
);
