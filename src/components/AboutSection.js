import React from "react";

// Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <div className="description">
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

// Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 5rem 25rem;
  color: #011627;
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
