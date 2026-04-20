import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tinkering" element={<Tinkering />} />
      <Route path="/work" element={<Work />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/now" element={<Now />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pay" element={<Venmo />} />
    </Routes>
    <Shell />
  </div>
);

export default App;
