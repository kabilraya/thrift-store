import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedItems from "./components/FeaturedItems";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Categories />
      <FeaturedItems />
      <Footer />
    </div>
  );
}

export default App;
