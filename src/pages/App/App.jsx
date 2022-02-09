import './App.css';
import React, { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../AuthPage/AuthPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import ProductPage from "../ProductPage/ProductPage";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";

import * as ordersAPI from '../../utilities/orders-api';

function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);

  // useEffect(function() {
  //   // if (!cart) return null;
  //   async function getCart() {
  //       const cart = await ordersAPI.getCart();
  //       setCart(cart);
  //       // updateCart(cart);
  //   }
  //   getCart();
  // }, []);

  useEffect(function() {
    // if (!cart) return null;
    async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
        // updateCart(cart);
    }
    getCart();
  },[]);

  async function handleAddToOrder(product) {
    const cart = await ordersAPI.addItemToCart(product);
    setCart(cart);
  }



  return (
    <main className="App">
      {
        <>
          <NavBar user={user} setUser={setUser} cart={cart} setCart={setCart} />
          {/* <NavBar /> */}

          <Routes>
            <Route path="/login" element={<AuthPage user={user} setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/products" element={<ProductPage cart={cart} setCart={setCart} handleAddToOrder={handleAddToOrder} />} />
            <Route path="/products/:productName" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </>
      }
    </main>
  );
}

export default App;