import './App.css';
import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home';
import Dashboard from './Dashboard.js'


class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/home' component={Home} />
          </Switch>
          <Switch>
            <Route path='/dashboard' component={Dashboard}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
