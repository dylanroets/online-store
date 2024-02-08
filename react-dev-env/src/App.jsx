import NavigationBar from "./components/NavigationBar";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  return (
    <div>
      <NavigationBar />
      <h1>Testing</h1>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/product" element={<Product addToCart={addToCart}/>} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
      </Routes>
    </div>
  );
}

export default App;
