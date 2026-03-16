import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="site-header" className="site-header" role="banner">
      <div className="header-brand">
        <div className="header-name">Ethan Holbrook</div>
      </div>
      <nav className="header-nav" aria-label="Primary">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "header-link header-link-active" : "header-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "header-link header-link-active" : "header-link"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/national-parks"
          className={({ isActive }) =>
            isActive ? "header-link header-link-active" : "header-link"
          }
        >
          Parks
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
