import React from "react";

// Wave Component
import Wave from "./Wave";

// Styles
import { About, Hide } from "../styles";

// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>Traditionnellement</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>photographié par</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>Finest Film.</motion.h2>
        </Hide>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consequat mauris malesuada eros tincidunt, ut tristique nibh pretium.
          Nam porttitor risus eget lacus tempus dictum.
        </motion.p>
        <motion.button variants={fade}>Contactez-nous</motion.button>
      </motion.div>
      <Wave />
    </About>
  );
};

export default AboutSection;
