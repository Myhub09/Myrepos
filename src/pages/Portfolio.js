import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import PortfolioHeader from "../components/PortfolioHeader";
import { Hide } from "../styles";

// Images
import urbain1 from "../img/urbain1.jpg";
import portrait1 from "../img/portrait1.png";
import paysage1 from "../img/paysage1.jpg";
import objet1 from "../img/objet1.jpg";

// Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";

const Portfolio = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <PortfolioHeader />
      <StyledPortfolio>
        <Service>
          <motion.h2 variants={fade}>Urbain</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/portfolio/urbain">
            <Hide>
              <motion.img variants={photoAnim} src={urbain1} alt="urbain1" />
            </Hide>
          </Link>
        </Service>
        <Service>
          <motion.h2 variants={fade}>Paysage</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/portfolio/paysage">
            <img src={paysage1} alt="portrait1" />
          </Link>
        </Service>
        <Service>
          <motion.h2 variants={fade}>Portrait</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/portfolio/portrait">
            <img src={portrait1} alt="paysage1" />
          </Link>
        </Service>
        <Service>
          <motion.h2 variants={fade}>Objet</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/portfolio/objet">
            <img src={objet1} alt="Objet" />
          </Link>
        </Service>
      </StyledPortfolio>
    </motion.div>
  );
};

const StyledPortfolio = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Service = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #011627;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    transition: 0.5s ease;
    &:hover {
      opacity: 0.75;
    }
  }
`;

export default Portfolio;
