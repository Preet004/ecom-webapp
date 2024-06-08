
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminOrdersScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get('/api/orders');
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Manage Orders</h2>
      {/* Add UI to display, update, and delete orders */}
    </div>
  );
}

export default AdminOrdersScreen;
