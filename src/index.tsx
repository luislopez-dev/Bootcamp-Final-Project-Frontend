import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutView from './views/checkoutView';
import ProductView from './views/productView';
import HomeView from './views/homeView';
import Layout from './components/layout/layout';
import { Provider } from 'react-redux';
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let persistor = persistStore(store);

root.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <Routes>      
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="checkout" element={<CheckoutView />} />
        <Route path='product/:id' element={<ProductView />} />
        <Route path='*' element={<HomeView />} />
      </Route>
      </Routes>
      </BrowserRouter> 
      </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();