import React, { useState, useEffect } from "react";
import "./AdminHomePage.css";

const AdminHomePage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    price: "",
    image: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/api/product");
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = async () => {
    await fetch("http://localhost:8080/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    setNewProduct({ product_name: "", price: "", image: "" });
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8080/api/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  const updateProduct = async (id, updatedProduct) => {
    await fetch(`http://localhost:8080/api/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    setEditingProduct(null);
    fetchProducts();
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Add Product</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={newProduct.product_name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, product_name: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
        </div>
        <button onClick={addProduct}>Add Product</button>
      </div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {editingProduct?.id === product.id ? (
              <div>
                <input
                  type="text"
                  value={editingProduct.product_name || ""}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      product_name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingProduct.price || ""}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      price: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingProduct.image || ""}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      image: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() => updateProduct(product.id, editingProduct)}
                >
                  Update
                </button>
              </div>
            ) : (
              <div>
                <img
                  src={product.image}
                  alt={product.product_name}
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <strong>{product.product_name}</strong> - {product.price}
                </div>
                <button onClick={() => setEditingProduct(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminHomePage;
