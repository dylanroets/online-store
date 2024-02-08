import NavigationBar from "./components/NavigationBar";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {


  return (
    <div>
      <NavigationBar />
      <h1>Testing</h1>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
