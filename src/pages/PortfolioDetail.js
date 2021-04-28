import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PortfolioState } from "../portfolioState";
import { motionValue } from "framer-motion";

const PortfolioDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [photographyTypes, setPhotographyTypes] = useState(PortfolioState);
  const [photographyType, setPhotographyType] = useState(null);

  // UseEffect
  useEffect(() => {
    const currentPhotographyType = photographyTypes.filter(
      (statePhotographyType) => statePhotographyType.url === url
    );
    setPhotographyType(currentPhotographyType[0]);
  }, [photographyTypes, url]);

  return (
    <>
      {photographyType && ( // Vérifie si l'information du type de photographie (venant de portfolioState.js) a été reçu. Si oui, on fait le rendu des components suivants.
        <Details>
          <Headline>
            <h2>{photographyType.title}</h2>
            <img src={photographyType.mainImg} alt="Type de photographie" />
          </Headline>
          <Awards>
            {photographyType.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
};

const Details = styled.div``;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  .line {
    width: 100%;
    background: #3f7d6e;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default PortfolioDetail;
