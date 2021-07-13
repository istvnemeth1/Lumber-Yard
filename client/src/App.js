import React, { Component } from 'react';
import './App.css';
import Index from './components/Index.js';
import Home from './components/Menu/Home.js';
import Village from './components/Menu/Village.js';
import Notification from './components/Menu/Notification.js';
import Todo from './components/Menu/Todo.js';
import Settings from './components/Menu/Settings.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from './components/404.js';

class App extends Component {
  state = {
    home:<Home/>,
    todo:<Todo/>,
    menu:<Village/>,
    notification:<Notification/>,
    settings:<Settings/>
  }
  render(){
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Index data={this.state.home} />} />
          <Route path="/todo" render={() => <Index data={this.state.todo} />} />
          <Route path="/home" render={() => <Index data={this.state.home} />} />
          <Route path="/menu" render={() => <Index data={this.state.menu} />} />
          <Route path="/notification" render={() => <Index data={this.state.notification} />} />
          <Route path="/settings" render={() => <Index data={this.state.settings} />} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
};
export default App;
