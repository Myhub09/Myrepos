import React from "react";

// Styled
import styled from "styled-components";

import { HeaderSection } from "../styles";

const ContactHeader = () => {
  return (
    <ContactHeaderSection>
      <h1>Contact.</h1>
      <p>
        Que ce soit par e-mail, par appel téléphonique ou par réseaux sociaux,
        nous vous invitons à bras ouverts à entrer en contact avec Finest Film.
      </p>
    </ContactHeaderSection>
  );
};

const ContactHeaderSection = styled(HeaderSection)`
  background: #2d3fff;
`;

export default ContactHeader;
