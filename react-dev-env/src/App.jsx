import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavigationBar />
      <h1>Testing</h1>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
