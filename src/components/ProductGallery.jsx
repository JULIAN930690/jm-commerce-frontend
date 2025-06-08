import React from "react";

function ProductGallery({ image }) {
  return (
    <div className="w-full h-full">
      <img
        src={image || "https://via.placeholder.com/600x400?text=Imagen+no+disponible"}
        alt="Producto"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}

export default ProductGallery;
