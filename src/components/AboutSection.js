import React from "react";

// Styled
// import styled from "styled-components";

// Styles
import { About, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <div>
        <Hide>
          <h2>Traditionnellement</h2>
        </Hide>
        <Hide>
          <h2>photographié par</h2>
        </Hide>
        <Hide>
          <h2>Finest Film.</h2>
        </Hide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consequat mauris malesuada eros tincidunt, ut tristique nibh pretium.
          Nam porttitor risus eget lacus tempus dictum.
        </p>
        <button>Contactez-nous</button>
      </div>
    </About>
  );
};

export default AboutSection;
