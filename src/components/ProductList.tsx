import React, { useEffect, useState } from "react";

interface Product {
  name: string;
  price: string;
  src: string;
}
export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("./data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.src} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
