import React from "react";

// Styled
import styled from "styled-components";

import { HeaderSection } from "../styles";

const PortfolioHeader = () => {
  return (
    <PortfolioHeaderSection>
      <h1>Portfolio.</h1>
      <p>
        Bienvenue à notre portfolio, le bazaar de Finest Film où vous pouvez
        trouver les moments les plus précieux que nous avons capturé jusqu'à
        présent.
      </p>
    </PortfolioHeaderSection>
  );
};

const PortfolioHeaderSection = styled(HeaderSection)`
  background: #f71735;
`;

export default PortfolioHeader;
