import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Tinkering from './Tinkering';
import Work from './Work';
import Photography from './Photography';
import Coffee from './Coffee';
import Now from './Now';
import Contact from './Contact';
import Venmo from './Venmo';
import Shell from './Shell';
import './design-system.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/tinkering" component={Tinkering} />
      <Route path="/work" component={Work} />
      <Route path="/photography" component={Photography} />
      <Route path="/coffee" component={Coffee} />
      <Route path="/now" component={Now} />
      <Route path="/contact" component={Contact} />
      <Route path="/pay" component={Venmo} />
    </Switch>
    <Shell />
  </div>
);

export default App;
