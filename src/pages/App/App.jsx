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
  
  
  useEffect(function() {
    async function getCart() {
        const cart = await ordersAPI.getCart();
        console.log('received back from orders.api')
        setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(product) {
    const cart = await ordersAPI.addItemToCart(product);
    setCart(cart);
  }


  return (
    <main className="App">
      {
        <>
          <NavBar user={user} setUser={setUser} cart={cart} />
  
          <Routes>
            <Route path="/login" element={<AuthPage user={user} setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/products" element={<ProductPage setCart={setCart} handleAddToOrder={handleAddToOrder} />} />
            <Route path="/products/:productName" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>

        // user ?
        // <>
        // <NavBar user={user} setUser={setUser}/>
        //   <Routes>
        //     <Route path="/orders/new" element={<NewOrderPage />} />
        //     <Route path="/orders" element={<OrderHistoryPage />} />
        //   </Routes>
        // </>
        // :
        // <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;