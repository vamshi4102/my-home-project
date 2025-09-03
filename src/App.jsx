import React from "react";
import TopBar from "../src/components/topBar";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import Builders from "./pages/builders";
import Workers from "./pages/workers";
function App() {
  return (
    <div>
      <Router>
      <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/builders" element={<Builders />} />
          <Route path="/workers" element={<Workers />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
