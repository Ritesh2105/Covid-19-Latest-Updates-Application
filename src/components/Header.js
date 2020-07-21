import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Latest Covid-19 Updates</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
