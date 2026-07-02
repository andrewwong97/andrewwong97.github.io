import React from 'react';

const Venmo = () => {
  React.useEffect(() => {
    window.location.replace('https://venmo.com/andrewwong97');
  }, []);
  return <div className="Venmo" />;
};

export default Venmo;
