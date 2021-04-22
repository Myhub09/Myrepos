import React from "react";
// Importer les icônes
import urbain from "../img/urbain.svg";
import portrait from "../img/portrait.svg";
import paysage from "../img/paysage.svg";
import objet from "../img/objet.svg";

// Styled
import styled from "styled-components";

// Styles
import { About, Description, Image, Hide } from "../styles";

// Images
import film2 from "../img/film2.jpg";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          Une caméra analogique, <span>des services de qualité.</span>
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={urbain} alt="Icône Urbain" />
              <h4 className="red">Urbain</h4>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={portrait} alt="Icône Portrait" />
              <h4 className="blue">Portrait</h4>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={paysage} alt="Icône Paysage" />
              <h4 className="blue">Paysage</h4>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={objet} alt="Icône Objet" />
              <h4 className="red">Objet</h4>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={film2} alt="Caméra" />
      </Image>
    </Services>
  );
};

export const Services = styled(About)`
  text-align: left;
  padding: 5rem 10rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 50%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 72px;
    height: 72px;
  }
  h4 {
    margin-left: 1rem;
    padding: 1rem;
    text-transform: uppercase;
  }
`;

export default ServicesSection;
