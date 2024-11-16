import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Venmo from './Venmo';
import './main.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pay" component={Venmo} />
      </Switch>
    </div>
  );
};

export default App;