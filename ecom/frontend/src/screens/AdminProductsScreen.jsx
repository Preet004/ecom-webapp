
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminProductsScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Manage Products</h2>
      {/* Add UI to display, create, edit, and delete products */}
    </div>
  );
}

export default AdminProductsScreen;
