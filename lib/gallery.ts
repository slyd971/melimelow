export type Artwork = {
  title: string;
  dimensions: string;
  image: string;
  alt: string;
};

export const artworks: Artwork[] = [
  {
    title: "Black Queen",
    dimensions: "Dimensions sur demande",
    image: "/gallery/black-queen.jpeg",
    alt: "Tableau Black Queen par MelyMelow",
  },
  {
    title: "Black Princess",
    dimensions: "Dimensions sur demande",
    image: "/gallery/black-princess.jpeg",
    alt: "Tableau Black Princess par MelyMelow",
  },
  {
    title: "Power",
    dimensions: "Dimensions sur demande",
    image: "/gallery/power.jpeg",
    alt: "Tableau Power par MelyMelow",
  },
  {
    title: "Wit Eye",
    dimensions: "Dimensions sur demande",
    image: "/gallery/wit-eye.jpeg",
    alt: "Tableau Wit Eye par MelyMelow",
  },
];
