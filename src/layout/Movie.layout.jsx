import React from 'react';
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovielayoutHoc = (Component) => ({ ...props }) => {
  return ( 
    <div>
    <MovieNavbar />
    <Component {...props} />
    <div>Footer</div>
  </div>
  );
};

export default MovielayoutHoc ;