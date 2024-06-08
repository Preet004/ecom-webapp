import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import  Store from './store';

const initialOptions = {
  "client-id": "your-client-id",
  currency: "USD",
  intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider options={initialOptions}>
    <Store>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Store>
  </PayPalScriptProvider>,
)
