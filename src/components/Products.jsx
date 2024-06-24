import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import productsData from "../components/homemadeProducts.json";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initial quantity
  const [quality, setQuality] = useState("High"); // Initial quality
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setData(productsData); // Set your JSON data
      setFilter(productsData);
      setLoading(false);
    };
    getProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...selectedProduct,
      quantity,
      quality,
    };
    addProduct(productToAdd);
    closeModal(); // Close the modal after adding to cart
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        
        <div className="row">
          {filter.map((product) => (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: "pointer" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                  <p className="card-text">{product.description.substring(0, 90)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
        <Modal show={!!selectedProduct} onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <img src={selectedProduct?.image} alt={selectedProduct?.title} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <p>{selectedProduct?.description}</p>
                <div className="mb-3">
                  <label htmlFor="quantityInput" className="form-label">Quantity:</label>
                  <input type="number" className="form-control" id="quantityInput" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="qualityInput" className="form-label">Quality:</label>
                  <select className="form-select" id="qualityInput" value={quality} onChange={(e) => setQuality(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <Button variant="dark" onClick={handleAddToCart}>Add to Cart</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Products;