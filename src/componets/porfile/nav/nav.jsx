import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mainNav">
      <div>
        <a href="#">Kristina Kristina</a>
      </div>
      <div>
        <NavLink to="/innstillinger">Innstillinger</NavLink>
      </div>
      <div>
        <NavLink to="/chat">chat</NavLink>
      </div>
      <div>
      <NavLink to="/users">users</NavLink>
      </div>
      <div>
        <a href="#">chat</a>
      </div>
    </div>
  );
};

export default NavBar;
