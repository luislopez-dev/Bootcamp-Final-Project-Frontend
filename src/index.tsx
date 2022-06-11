import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutView from './views/checkoutView';
import OrderView from './views/orderView';
import ProductView from './views/productView';
import SearchView from './views/searchView';
import HomeView from './views/homeView';
import TestView from './views/testView';
import Layout from './components/layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>      
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeView />} />
      <Route path="checkout" element={<CheckoutView />} />
      <Route path='order' element={<OrderView />} />
      <Route path='product/:id' element={<ProductView />} />
      <Route path='search' element={<SearchView />} />
      <Route path='test' element={<TestView />} />
    </Route>
    </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();