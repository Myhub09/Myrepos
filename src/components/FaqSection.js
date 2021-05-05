import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Des questions <span>fréquemment posées</span> pour les curieux.
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I Start?">
          <div className="reponse">
            <p>
              Integer eu tempor metus, eu laoreet ante. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Etiam sit amet elit ipsum. Sed placerat molestie mattis.
              Sed mollis justo non justo pharetra, eu pellentesque sapien
              mattis. Donec vitae tortor non mauris tempor placerat ac vel
              felis. Sed ultricies eros at dui efficitur fermentum. Fusce ut
              feugiat enim. Integer aliquet diam finibus aliquam convallis.
              Aenean et imperdiet tortor, vel mattis ipsum. Donec at suscipit
              metus, at tincidunt tortor. Phasellus interdum quis nisl a
              volutpat. Maecenas cursus, neque eget lacinia lacinia, libero
              velit porttitor turpis, non mattis orci ante eu velit. Morbi at
              urna non neque molestie bibendum vitae a ipsum. Nullam libero
              enim, molestie mattis lacinia eu, vehicula egestas magna. Maecenas
              urna enim, volutpat luctus maximus vel, vulputate sed quam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Question 2?">
          <div className="reponse">
            <p>
              Integer eu tempor metus, eu laoreet ante. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Etiam sit amet elit ipsum. Sed placerat molestie mattis.
              Sed mollis justo non justo pharetra, eu pellentesque sapien
              mattis. Donec vitae tortor non mauris tempor placerat ac vel
              felis. Sed ultricies eros at dui efficitur fermentum. Fusce ut
              feugiat enim. Integer aliquet diam finibus aliquam convallis.
              Aenean et imperdiet tortor, vel mattis ipsum. Donec at suscipit
              metus, at tincidunt tortor. Phasellus interdum quis nisl a
              volutpat. Maecenas cursus, neque eget lacinia lacinia, libero
              velit porttitor turpis, non mattis orci ante eu velit. Morbi at
              urna non neque molestie bibendum vitae a ipsum. Nullam libero
              enim, molestie mattis lacinia eu, vehicula egestas magna. Maecenas
              urna enim, volutpat luctus maximus vel, vulputate sed quam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Question 3?">
          <div className="reponse">
            <p>
              Integer eu tempor metus, eu laoreet ante. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Etiam sit amet elit ipsum. Sed placerat molestie mattis.
              Sed mollis justo non justo pharetra, eu pellentesque sapien
              mattis. Donec vitae tortor non mauris tempor placerat ac vel
              felis. Sed ultricies eros at dui efficitur fermentum. Fusce ut
              feugiat enim. Integer aliquet diam finibus aliquam convallis.
              Aenean et imperdiet tortor, vel mattis ipsum. Donec at suscipit
              metus, at tincidunt tortor. Phasellus interdum quis nisl a
              volutpat. Maecenas cursus, neque eget lacinia lacinia, libero
              velit porttitor turpis, non mattis orci ante eu velit. Morbi at
              urna non neque molestie bibendum vitae a ipsum. Nullam libero
              enim, molestie mattis lacinia eu, vehicula egestas magna. Maecenas
              urna enim, volutpat luctus maximus vel, vulputate sed quam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Question 4?">
          <div className="reponse">
            <p>
              Integer eu tempor metus, eu laoreet ante. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Etiam sit amet elit ipsum. Sed placerat molestie mattis.
              Sed mollis justo non justo pharetra, eu pellentesque sapien
              mattis. Donec vitae tortor non mauris tempor placerat ac vel
              felis. Sed ultricies eros at dui efficitur fermentum. Fusce ut
              feugiat enim. Integer aliquet diam finibus aliquam convallis.
              Aenean et imperdiet tortor, vel mattis ipsum. Donec at suscipit
              metus, at tincidunt tortor. Phasellus interdum quis nisl a
              volutpat. Maecenas cursus, neque eget lacinia lacinia, libero
              velit porttitor turpis, non mattis orci ante eu velit. Morbi at
              urna non neque molestie bibendum vitae a ipsum. Nullam libero
              enim, molestie mattis lacinia eu, vehicula egestas magna. Maecenas
              urna enim, volutpat luctus maximus vel, vulputate sed quam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Question 5?">
          <div className="reponse">
            <p>
              Integer eu tempor metus, eu laoreet ante. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Etiam sit amet elit ipsum. Sed placerat molestie mattis.
              Sed mollis justo non justo pharetra, eu pellentesque sapien
              mattis. Donec vitae tortor non mauris tempor placerat ac vel
              felis. Sed ultricies eros at dui efficitur fermentum. Fusce ut
              feugiat enim. Integer aliquet diam finibus aliquam convallis.
              Aenean et imperdiet tortor, vel mattis ipsum. Donec at suscipit
              metus, at tincidunt tortor. Phasellus interdum quis nisl a
              volutpat. Maecenas cursus, neque eget lacinia lacinia, libero
              velit porttitor turpis, non mattis orci ante eu velit. Morbi at
              urna non neque molestie bibendum vitae a ipsum. Nullam libero
              enim, molestie mattis lacinia eu, vehicula egestas magna. Maecenas
              urna enim, volutpat luctus maximus vel, vulputate sed quam.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  text-align: left;
  padding: 5rem 10rem;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-size: 3rem;
  }
  .faq-line {
    background: #011627;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
