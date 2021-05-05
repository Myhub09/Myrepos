import React from "react";

// Styled
import styled from "styled-components";

// Styles
import { HeaderSection, Hide } from "../styles";

// Animations
import { motion } from "framer-motion";
import { titleAnim } from "../animation";

const PortfolioHeader = () => {
  return (
    <PortfolioHeaderSection>
      <Hide>
        <motion.h1 variants={titleAnim}>Portfolio.</motion.h1>
      </Hide>
      <Hide>
        <motion.p variants={titleAnim}>
          Bienvenue à notre portfolio, le bazaar de Finest Film où vous pouvez
          trouver les moments les plus précieux que nous avons capturé jusqu'à
          présent.
        </motion.p>
      </Hide>
    </PortfolioHeaderSection>
  );
};

const PortfolioHeaderSection = styled(HeaderSection)`
  background: #f71735;
`;

export default PortfolioHeader;
