import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from './components/404.js';

class App extends Component {
  state = {
    loading:'Loading ...'
  }
  render(){
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Home data={this.state.loading} title={'pityu'} />} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
};
export default App;
