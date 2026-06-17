export type Artwork = {
  title: string;
  dimensions: string;
  image: string;
  alt: string;
};

export const artworks: Artwork[] = [
  {
    title: "Black Queen",
    dimensions: "50 cm x 70 cm - Spray paint + Acrylique + Résine",
    image: "/gallery/black-queen.jpeg",
    alt: "Tableau Black Queen par MelyMelow",
  },
  {
    title: "Black Princess",
    dimensions: "100 cm x 100 cm - Spray paint + Acrylique + Résine",
    image: "/gallery/black-princess.jpeg",
    alt: "Tableau Black Princess par MelyMelow",
  },
  {
    title: "Power",
    dimensions: "50 cm x 70 cm - Acrylique + Résine",
    image: "/gallery/power.jpeg",
    alt: "Tableau Power par MelyMelow",
  },
  {
    title: "Wit Eye",
    dimensions: "100 cm x 70 cm x 2 - Acrylique + Résine + Argile mousse",
    image: "/gallery/wit-eye.jpeg",
    alt: "Tableau Wit Eye par MelyMelow",
  },
];
