import './App.css';
import React, { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import ProductPage from "../ProductPage/ProductPage";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import PaymentCompletePage from "../PaymentCompletePage/PaymentCompletePage";
import Footer from "../../components/Footer/Footer";
import * as ordersAPI from '../../utilities/orders-api';

function App() {
  const [user, setUser] = useState(getUser());
  // current order
  const [cart, setCart] = useState(null);
  // past orders
  const [orders, setOrders] = useState([]);

  async function handleAddToOrder(product) {
    if (user) {
      const cart = await ordersAPI.addItemToCart(product);
      setCart(cart);
    }
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleDeleteItem(itemId) {
    const updatedCart = await ordersAPI.deleteItemInCart(itemId);
    setCart(updatedCart);
  }

  return (
    <main className="App">
      {
        <div className="page_container">
          <NavBar user={user} setUser={setUser} cart={cart} setCart={setCart} handleChangeQty={handleChangeQty} handleDeleteItem={handleDeleteItem} />
          
          <Routes>
            <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage user={user} orders={orders} setOrders={setOrders} setCart={setCart} />} />
            <Route path="/products" element={<ProductPage pageCategory="all Products" cart={cart} setCart={setCart} handleAddToOrder={handleAddToOrder} />} />
            <Route path="/products/:productName" element={<ProductDetailPage user={user} cart={cart} setCart={setCart} handleAddToOrder={handleAddToOrder} />} />
            <Route path="/products/peripherals" element={<ProductPage pageCategory="peripherals" cart={cart} setCart={setCart} handleAddToOrder={handleAddToOrder} />} />
            <Route path="/products/accessories" element={<ProductPage pageCategory="accessories" cart={cart} setCart={setCart} handleAddToOrder={handleAddToOrder} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
            <Route path="/checkout/completed" element={<PaymentCompletePage user={user} orders={orders} setOrders={setOrders} />} />
            <Route path="/*" element={<HomePage user={user} setCart={setCart} />} />
          </Routes>

          <Footer />
         
        </div>
      }
    </main>
  );
}

export default App;