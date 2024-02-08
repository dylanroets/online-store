import NavigationBar from "./components/NavigationBar";
import Product from "./components/Product";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
