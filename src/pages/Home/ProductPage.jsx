import React from "react";
import { useParams } from "react-router-dom";
import subcategories from "../../Data/subcategories";

export default function ProductPage() {
  const { id } = useParams();

  const product = subcategories.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Product not found for id: {id}</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={300} />
      <p>Price: ₹{product.price}</p>
    </div>
  );
}
