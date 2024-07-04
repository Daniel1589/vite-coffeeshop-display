// ProductList.tsx
import React from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "Product 1", image: "/images/product1.jpg", price: 100 },
  { id: 2, name: "Product 2", image: "/images/product2.jpg", price: 200 },
  { id: 3, name: "Product 3", image: "/images/product3.jpg", price: 300 },
  { id: 4, name: "Product 4", image: "/images/product4.jpg", price: 400 },
  // Add more products as needed
];

const ProductList: React.FC = () => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </>
  );
};
