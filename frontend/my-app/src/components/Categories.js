import React from "react";

const Categories = () => {
  const categories = [
    { name: "Clothing", image: "clothing.jpg" },
    { name: "Electronics", image: "electronics.jpg" },
    { name: "Home Decor", image: "home-decor.jpg" },
    { name: "Books", image: "books.jpg" },
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
