//Import Images
import urbain1 from "./img/urbain1.jpg";
import paysage1 from "./img/paysage1.jpg";
import portrait1 from "./img/portrait1.png";
import objet1 from "./img/objet1.jpg";

export const ServicesState = () => {
  return [
    // Photographie urbaine
    {
      title: "Photographie urbaine",
      mainImg: urbain1,
      secondaryImg: urbain1,
      url: "/services/urbain",
      awards: [
        {
          title: "Lorem ipsum.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Dolor sit amet.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Adipiscing elit.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    // Photographie de paysage
    {
      title: "Photographie de paysage",
      mainImg: paysage1,
      url: "/services/paysage",
      secondaryImg: paysage1,
      awards: [
        {
          title: "Lorem ipsum.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Dolor sit amet.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Adipiscing elit.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    // Photographie de portrait
    {
      title: "Photographie de portrait",
      mainImg: portrait1,
      url: "/services/portrait",
      secondaryImg: portrait1,
      awards: [
        {
          title: "Lorem ipsum.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Dolor sit amet.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Adipiscing elit.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    // Photographie d'objet
    {
      title: "Photographie d'objet",
      mainImg: objet1,
      url: "/services/objet",
      secondaryImg: objet1,
      awards: [
        {
          title: "Lorem ipsum.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Dolor sit amet.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Adipiscing elit.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
