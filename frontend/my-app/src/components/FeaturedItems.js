import React, { useEffect, useState } from "react";

const FeaturedItems = () => {
  const [products, setProducts] = useState([]); // State to store products

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.example.com/products"); // Replace with your backend API endpoint
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="featured-items">
      <h2>Featured Items</h2>
      <div className="item-list">
        {products.map((product) => (
          <div key={product.id} className="item-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
