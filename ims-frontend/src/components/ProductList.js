import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter(p => p._id !== id));
    });
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} ({p.sku}) - {p.quantity}
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
