import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Retrieve cart items from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(storedCart) });
    }
  }, [dispatch]);

  const updateLocalStorage = (updatedCart) => {
    if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(updatedCart));
    }
  };
  

  const addItem = (product) => {
    const updatedCart = state.map(item =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
    dispatch(addCart(product));
    updateLocalStorage(updatedCart);
  };

  const removeItem = (product) => {
    const updatedCart = state.map(item =>
      item.id === product.id ? { ...item, qty: item.qty - 1 } : item
    ).filter(item => item.qty > 0);
    dispatch(delCart(product));
    updateLocalStorage(updatedCart);
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/home" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((product) => (
                      <div key={product.id}>
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                              <img
                                src={product.image}
                                className="w-100"
                                alt={product.title}
                              />
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p><strong>{product.title}</strong></p>
                            <p>Category: {product.category}</p>
                            <button
                              onClick={() => removeItem(product)}
                              className="btn btn-dark btn-sm me-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                            <button
                              onClick={() => addItem(product)}
                              className="btn btn-dark btn-sm mb-2"
                              data-mdb-toggle="tooltip"
                              title="Move to the wish list"
                            >
                              <i className="fas fa-heart"></i>
                            </button>
                          </div>
                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                              <button
                                className="btn btn-dark px-3 me-2"
                                onClick={() => removeItem(product)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={product.qty}
                                  type="number"
                                  className="form-control"
                                  readOnly
                                />
                                <label className="form-label" htmlFor="form1">Quantity</label>
                              </div>
                              <button
                                className="btn btn-dark px-3 ms-2"
                                onClick={() => addItem(product)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>${product.price}</strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p><strong>Expected shipping delivery</strong></p>
                    <p className="mb-0">12.10.2024 - 14.10.2024</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems} Items)
                        <span>${subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total Amount</strong>
                        </div>
                        <span><strong>${(subtotal + shipping).toFixed(2)}</strong></span>
                      </li>
                    </ul>
                    <Link to="/checkout">
                      <button type="button" className="btn btn-dark btn-lg btn-block">
                        Proceed to Pay
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {user && (
          <div className="container my-3 py-3">
            <h5 className="text-center">Welcome, {user.email}</h5>
          </div>
        )}
        {state.length === 0 ? <EmptyCart /> : <ShowCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
