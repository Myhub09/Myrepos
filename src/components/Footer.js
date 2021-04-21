import React from "react";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <Footer>
      <p>Copyright 2021 // Tous les droits sont réservés.</p>
      <p>
        Site web par{" "}
        <a href="https://mackinnonmedia.com">Alexander MacKinnon</a>
      </p>
    </Footer>
  );
};

const Footer = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #f2f4f7;
  a {
    color: #011627;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default FooterSection;
