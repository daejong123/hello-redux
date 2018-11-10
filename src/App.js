import React, { Component } from 'react';
import './App.css';
import ConnectHome from './container/ConnectHome';
import About from './component/About';
import {Route, Link} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">主页</Link>
          <Link to="/about">关于我们</Link>
          <br />
          <Route exact path="/" component={ConnectHome}></Route>
          <Route exact path="/about" component={About}></Route>
        </div>
      </div>
    );
  }
}

export default App;
