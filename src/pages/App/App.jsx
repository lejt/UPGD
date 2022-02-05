import './App.css';
import React, { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../AuthPage/AuthPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import ProductPage from "../ProductPage/ProductPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        <>
          <NavBar user={user}/>
  
          <Routes>
            <Route path="/login" element={<AuthPage user={user} setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
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