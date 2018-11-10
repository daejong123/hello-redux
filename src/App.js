import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const { list } = this.props.titleReducer;
    const {addTitle, delTitle } = this.props;
    return (
      <div className="App">
        <header className="App-header">
        {
          list.map(
            (title, index) => (
              <p key={index}>
                <span>{title}</span>
                <button onClick={() => delTitle(index)}>删除</button>
              </p>
            )
          )
        }
        <p>
          <input ref='input'/>
          <button onClick={() => addTitle(this.refs.input.value)}>添加</button>
        </p>
        </header>
      </div>
    );
  }
}

export default App;
