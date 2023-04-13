import Router from "preact-router";
import {Products} from "./pages/Products.jsx";
import {Home} from "./pages/Home.jsx";
import {Product} from "./pages/Product.jsx";
import React from "react";
import HeaderLayout from "./components/layout/headerLayout";
import FooterLayout from "./components/layout/footerLayout.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";

export function App() {

    return (
        <div className={"bg-primary text-white"}>
            <HeaderLayout/>
            <Router>
                <Home path="/" />
                <Product path="/product/:id" />
                <Products path="/products" />
                <MentionsLegales path="/mentions-legales" />
            </Router>
            <FooterLayout/>
        </div>
    )
}
