import React from 'react';

const NavBar = () => {
  let current = 'top';

  return (
    <nav>
      <a className={current === 'top' ? 'current': ''} href="#">top</a>
      |
      <a className={current === 'new' ? 'current': ''} href="#">new</a>
    </nav>
  );
}

export default NavBar;
