
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminUsersScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/api/users');
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>
      {/* Add UI to display, create, update, and delete users */}
    </div>
  );
}

export default AdminUsersScreen;
