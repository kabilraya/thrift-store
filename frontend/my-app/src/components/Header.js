import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Goodwill Finds</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="header-actions">
        <input type="text" placeholder="Search..." />
        <button className="login-button">Login</button>
        <button>Cart</button>
      </div>
    </header>
  );
};

export default Header;
