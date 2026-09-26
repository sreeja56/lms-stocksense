import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit({ name, sku, quantity, price, category });
    }
    
    setName('');
    setSku('');
    setQuantity(0);
    setPrice(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>SKU:</label>
        <input value={sku} onChange={(e) => setSku(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
