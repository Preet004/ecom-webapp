import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import CartScreen from './screens/CartScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SearchScreen from './screens/SearchScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import AdminProductsScreen from './screens/AdminProductsScreen';
import AdminOrdersScreen from './screens/AdminOrdersScreen';
import AdminUsersScreen from './screens/AdminUsersScreen';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/payment" element={<PaymentMethodScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/admin/dashboard" element={<AdminRoute element={<AdminDashboardScreen />} />} />
        <Route path="/admin/products" element={<AdminRoute element={<AdminProductsScreen />} />} />
        <Route path="/admin/orders" element={<AdminRoute element={<AdminOrdersScreen />} />} />
        <Route path="/admin/users" element={<AdminRoute element={<AdminUsersScreen />} />} />

      </Routes>
    </Router>
  );
}

export default App;
