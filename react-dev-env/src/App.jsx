import NavigationBar from "./components/NavigationBar";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/product" element={<Product addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
