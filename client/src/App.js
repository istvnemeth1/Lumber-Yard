import React, { Component } from 'react';
import './App.css';
import Index from './components/Index.js';
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
          <Route path="/" render={() => <Index data={this.state.loading} title={'pityu'} />} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
};
export default App;
