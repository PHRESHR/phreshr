import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './styles';

function Nav() {
  return (
    <Navigation>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/shows" activeClassName="active">Shows</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </Navigation>
  );
}

export default Nav;
