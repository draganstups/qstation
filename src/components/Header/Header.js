import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand ms-3">
          Accounts App
        </Link>
        <ul className="navbar-nav ms-auto">
          <NavLink to="/" activeclassname="activeLink" className="nav-link ">
            Accounts
          </NavLink>
          <NavLink to="add/" activeclassname="activeLink" className="nav-link">
            Add
          </NavLink>
          <NavLink
            to="/edit"
            activeclassname="activeLink"
            className="nav-link me-3"
          >
            Edit/Delete
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
