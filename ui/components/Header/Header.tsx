import * as React from 'react';
import Logo from 'ui/components/Logo';
import Nav from 'ui/components/Nav';
import Toolbar from 'ui/styles/Toolbar';

function Header() {
  return (
    <Toolbar>
      <Logo/>
      <Nav />
    </Toolbar>
  );
};

export default Header;
