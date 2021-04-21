import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#">FINEST FILM</a>
      </h1>
      <ul>
        <li>
          <a href="#">ACCUEIL</a>
        </li>
        <li>
          <a href="#">PORTFOLIO</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
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
