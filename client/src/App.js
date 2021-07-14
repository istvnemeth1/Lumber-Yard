import React, { Component } from 'react';

import './App.css';
// import Index from './components/Index.js';
import Home from './components/Menu/Home.js';
import Village from './components/Menu/Village.js';
import Notification from './components/Menu/Notification.js';
import Todo from './components/Menu/Todo.js';
import Settings from './components/Menu/Settings.js';
import Shed from './components/Assets/Houses/Shed.js';
import Error from './components/404.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends Component {
  // time test 3
  render(){
    return (
      <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={ () => <Home /> } />
              <Route path="/home" render={ () => <Home /> } />
              <Route path="/menu" render={ () => <Village /> } />
              <Route path="/notification" render={ () => <Notification /> } />
              <Route path="/todo" render={ () => <Todo /> } />
              <Route path="/settings" render={ () => <Settings /> } />
              <Route path="/shed" render={ () => <Shed /> } />
              {/* <Route path="/" render={ () => <Home /> } /> */}
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
      </>
    );
  }
};
export default App;
