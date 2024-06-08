// src/components/AdminMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminMenu() {
  return (
    <div className="admin-menu">
      <h3>Admin Menu</h3>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminMenu;
