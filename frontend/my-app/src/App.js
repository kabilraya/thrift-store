import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedItems from "./components/FeaturedItems";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="landing-page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <FeaturedItems />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
