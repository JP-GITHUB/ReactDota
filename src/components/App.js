import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../assets/css/main.css';

import Home from './Home';
import Contact from './Contact';

import Page404 from './Errors/Page404';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
