import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Venmo from './Venmo';
import AtlassianReferral from './AtlassianReferral';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pay" component={Venmo} />
          <Route path="/ref" Component={AtlassianReferral} />
        </Switch>
      </div>
    );
  }
}

export default App;
