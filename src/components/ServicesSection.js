import React from "react";
// Importer les icônes
import urbain from "../img/urbain.svg";
import portrait from "../img/portrait.svg";
import paysage from "../img/paysage.svg";
import objet from "../img/objet.svg";

// Images
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            Une caméra analogique, <span>des services de qualité.</span>
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={urbain} alt="Icône Urbain" />
                <h3>Urbain</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consequat mauris malesuada eros tincidunt, ut tristique.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={portrait} alt="Icône Portrait" />
                <h3>Portrait</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consequat mauris malesuada eros tincidunt, ut tristique.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={paysage} alt="Icône Paysage" />
                <h3>Paysage</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consequat mauris malesuada eros tincidunt, ut tristique.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={objet} alt="Icône Objet" />
                <h3>Objet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consequat mauris malesuada eros tincidunt, ut tristique.
              </p>
            </div>
          </div>
          <div className="image">
            <img src={home2} alt="Caméra" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
