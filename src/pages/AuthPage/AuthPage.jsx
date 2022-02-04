import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import  { Navigate } from 'react-router-dom';

export default function AuthPage({user, setUser}) {
    return (
        <main>
            <h1>LOGIN HERE</h1>
            {/* <LoginForm setUser={setUser}/> */}

            {user ? <Navigate to="/" /> : <LoginForm setUser={setUser}/>}
            
        </main>
    )
}