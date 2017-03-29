import * as React from 'react';
import { Link } from 'react-router-dom';
import Branding from './styles';

function Logo() {
  return (
    <Branding className="branding">
      <Link to="/">
        <img src="/images/logo.svg" alt="React logo"/>
      </Link>
    </Branding>
  );
};

export default Logo;
