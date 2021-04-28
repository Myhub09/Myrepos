import React from "react";

// Styles
import { About, Hide } from "../styles";

// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <motion.div>
        <Hide>
          <motion.h2>Traditionnellement</motion.h2>
        </Hide>
        <Hide>
          <motion.h2>photographié par</motion.h2>
        </Hide>
        <Hide>
          <motion.h2>Finest Film.</motion.h2>
        </Hide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consequat mauris malesuada eros tincidunt, ut tristique nibh pretium.
          Nam porttitor risus eget lacus tempus dictum.
        </p>
        <button>Contactez-nous</button>
      </motion.div>
    </About>
  );
};

export default AboutSection;
