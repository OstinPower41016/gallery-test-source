import * as React from "react";
import { Link } from "react-router-dom";

import "./styles/NavBar.scss";
import Container from "./layout/container";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <header className="navbar">
      <Container>
        <nav className="navbar__links">
          <Link to="/" className="navbar__logo">
            Simple Beatiful Gallery
          </Link>
          <div className="nvabar__photos">
            <Link to="/photos">Go to foto gallery</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default NavBar;
