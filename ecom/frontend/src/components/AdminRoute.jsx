
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Store from '../store';

function AdminRoute({ element, ...rest }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? <Route {...rest} element={element} /> : <Navigate to="/signin" />;
}

export default AdminRoute;
