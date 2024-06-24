import React, { useState, useEffect } from "react";
import "./prod.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/api/product");
    const data = await response.json();
    setProducts(data);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list-container">
      <h1 className="title">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.product_name}
              className="product-image"
            />
            <h2 className="product-name">{product.product_name}</h2>
            <p className="product-price">{product.price}</p>
            <button className="cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart-section">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.product_name} - {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;
