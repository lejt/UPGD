import './App.css';
import React, { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../AuthPage/AuthPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        <>
          <NavBar />

          <Routes>
            <Route path="/login" element={<AuthPage setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpPage setUser={setUser}/>} />
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
            {/* <Route path="/" element={<HomePage />} /> */}
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