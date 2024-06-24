import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, MessagePage, PageNotFound } from "./pages";
import Prod from './pages/prod';

import MessageList from './components/MessageList';
import Admin from './pages/Admin';
import AdminHomePage from './pages/Admin_home';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/prod" element={<Prod />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/read" element={<MessageList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
