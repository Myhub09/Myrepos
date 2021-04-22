import React from "react";
import styled from "styled-components";

// Router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">FINEST FILM</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">ACCUEIL</Link>
        </li>
        <li>
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #f2f4f7;
  a {
    text-decoration: none;
    color: #011627;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 2rem;
    position: relative;
  }
`;

export default Nav;
