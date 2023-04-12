import Router from "preact-router";
import {Products} from "./pages/Products.jsx";
import {Home} from "./pages/Home.jsx";
import {Product} from "./pages/Product.jsx";
import React from "react";
import {Navbar} from "./components/layout/navbar.jsx";

export function App() {

    return (
        <div className={"bg-primary text-white"}>
            <Navbar/>
            <Router>
                <Home path="/" />
                <Product path="/product/:id" />
                <Products path="/products" />
            </Router>
        </div>
    )
}
