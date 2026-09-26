import React, { useEffect, useState } from 'react';
import ProductForm from './components/ProductForm';
import { getProducts, createProduct } from './services/productService';

function App() {
  const [products, setProducts] = useState([]);

  // Load products initially
  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Function to handle form submission
  const handleAddProduct = async (productData) => {
    try {
      const res = await createProduct(productData);
      setProducts([...products, res.data]); // update state
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  return (
    <div>
      <h1>Inventory Management</h1>

      {/* 👇 Add your ProductForm here */}
      <ProductForm onSubmit={handleAddProduct} />

      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} — {p.sku} — {p.category} — {p.quantity} — ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
