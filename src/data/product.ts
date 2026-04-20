import produdct1 from "../assets/product-img/product1.png";
import produdct2 from "../assets/product-img/product2.png";
import produdct3 from "../assets/product-img/product3.png";
import produdct4 from "../assets/product-img/product4.png";
import produdct5 from "../assets/product-img/product5.png";
import produdct6 from "../assets/product-img/product6.png";
import produdct7 from "../assets/product-img/product7.png";
import produdct8 from "../assets/product-img/product8.png";
import produdct9 from "../assets/product-img/product9.png";

const products: {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}[] = [
  {
    id: 1,
    title: "Grey Low Armchair",
    description:
      "Elegant minimalist design with premium grey fabric and a sleek swivel base.",
    price: 20000,
    image: produdct1,
  },
  {
    id: 2,
    title: "Counter Stool",
    description:
      "A perfect height stool featuring ergonomic support and a durable plywood frame.",
    price: 10000,
    image: produdct2,
  },
  {
    id: 3,
    title: "Cane Armchair",
    description:
      "Classic hand-woven cane textures paired with modern structural support.",
    price: 8000,
    image: produdct3,
  },
  {
    id: 4,
    title: "Velvet Armchair",
    description:
      "Luxurious deep-pile velvet upholstery for a sophisticated living space accent.",
    price: 25000,
    image: produdct4,
  },
  {
    id: 5,
    title: "Wooden Lounge Chair",
    description:
      "An iconic silhouette crafted from high-quality treated plywood for ultimate relaxation.",
    price: 20000,
    image: produdct5,
  },
  {
    id: 6,
    title: "Bar Stool",
    description:
      "Industrial-inspired design featuring a swivel mechanism and footrest for comfort.",
    price: 10000,
    image: produdct6,
  },
  {
    id: 7,
    title: "Wooden Chair",
    description:
      "Earth-toned rattan seat offering a natural, bohemian aesthetic to any dining room.",
    price: 12000,
    image: produdct7,
  },
  {
    id: 8,
    title: "Lounge Armchair",
    description:
      "Heavy-duty sturdy wood construction with a wide seat designed for long-duration lounging.",
    price: 20000,
    image: produdct8,
  },
  {
    id: 9,
    title: "Office Chair",
    description:
      "Professional-grade swivel chair with adjustable features for an ergonomic workspace.",
    price: 30000,
    image: produdct9,
  },
];

export default products;
