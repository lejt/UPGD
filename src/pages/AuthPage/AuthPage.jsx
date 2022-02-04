import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}) {
    return (
        <main>
            <h1>LOGIN HERE</h1>
            <LoginForm setUser={setUser}/>
        </main>
    )
}