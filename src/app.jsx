import Router from "preact-router";
import {Products} from "./pages/Products.jsx";
import {Home} from "./pages/Home.jsx";
import {Product} from "./pages/Product.jsx";
import React from "react";

export function App() {

  return (
      <div className={"bg-primary text-white"}>
          <Router>
            <Home path="/" />
            <Product path="/product/:id" />
            <Products path="/products" />
          </Router>
      </div>
  )
}
