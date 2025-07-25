import React from "react";
import { useProducts } from "../../context/ProductContext";
import SectionCarousel from "../SectionCarousel";

const OffersOfTheDay = () => {
  const { offers } = useProducts();

  if (!offers?.length) return null;

  return (
    <SectionCarousel title="🔥 Ofertas del día" products={offers} />
  );
};

export default OffersOfTheDay;

