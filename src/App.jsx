import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Landing';
import Tinkering from './Tinkering';
import Work from './Work';
import Contact from './Contact';
import Venmo from './Venmo';
import Shell from './Shell';
import { IG_URL } from './Nav';
import './design-system.css';

const ExternalRedirect = ({ to }) => {
  React.useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
};

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tinkering" element={<Tinkering />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/photography" element={<ExternalRedirect to={IG_URL} />} />
      <Route path="/pay" element={<Venmo />} />
      {/* Coffee and Now stay unrouted until they have real content. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Shell />
  </div>
);

export default App;
