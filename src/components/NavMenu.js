import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/character">Characters List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
