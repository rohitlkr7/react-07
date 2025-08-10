import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        const uniqueCategories = [
          "all",
          ...new Set(data.products.map(p => p.category))
        ];
        setCategories(uniqueCategories);
      })
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = products
    .filter(product =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Store</h1>

      {/* Filter */}
      <label>
        Filter by category:{" "}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {/* Sort */}
      <label style={{ marginLeft: "20px" }}>
        Sort by price:{" "}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">None</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </label>

      {/* Product List */}
      <div
        style={{
          width: "100 %",  
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "20px"
        }}
      >
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center"
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
