import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register () {
    return(
        <>
        <Navbar/>
        <h5>Create an account!</h5>
        <form action="/register" method="POST">
            <label htmlFor="email">Enter your email address:</label>
            <input type="email" name="email" placeholder="example@example.ca"/>
            <label htmlFor="password">Enter a strong password:</label>
            <input type="password" name="password" placeholder="password123" />
            <button type="submit">Submit</button>
        </form> 
        <Footer/>
        
        </>
    )
}