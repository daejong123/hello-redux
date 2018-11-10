import React, { Component } from 'react';
import './App.css';
import titleAction from './actions/titleAction';

class App extends Component {

  addTitle() {
    let titleInput = this.refs.titleInput;
    if (titleInput.value.trim() === '') return;
    let { dispatch } = this.props;
    dispatch({type: titleAction.ADD, value: titleInput.value});
    titleInput.value = "";
  }
  
  delTitle(index) {
    let { dispatch } = this.props;
    dispatch({type: titleAction.DEL, value: index})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
          this.props.store.list.map(
            (title, index) => (
              <p key={index}>
                <span>{title}</span>
                <button onClick={this.delTitle.bind(this, index)}>删除</button>
              </p>
            )
          )
        }
        <p>
          <input ref="titleInput"/>
          <button onClick={this.addTitle.bind(this)}>添加</button>
        </p>
        </header>
      </div>
    );
  }
}

export default App;
