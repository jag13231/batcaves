import React from "react";

const products = [
  { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 49.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/150" },
];

function Jagan() {
  return (
    <div>
      {/* Header */}
      <header style={{ background: "#333", color: "#fff", padding: "1rem" }}>
        <h1>My E-Commerce Store</h1>
      </header>

      {/* Product Listing */}
      <main style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%" }} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </main>

      {/* Cart Section */}
      <aside style={{ background: "#f9f9f9", padding: "1rem", borderTop: "1px solid #eee" }}>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </aside>
    </div>
  );
}

export default Jagan;
