import React from 'react';
import Navbar from "../components/Navbar/Navbar.Component";
const Defaultlayout = (Component) => ({ ...props})   => {
  return (
    <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
  );
}

export default Defaultlayout;