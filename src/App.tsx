import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages';
import { ProductDetail } from './pages/product-detail/ProductDetail';

export const App: React.FC<any> = () => {
  return (
    <BrowserRouter basename={'/'} >
      <Routes>
        <Route path="/" element={
          <Navigate to="/products" replace />
        } />
        <Route path="/products" element={
          <Home />
        } />
        <Route path="/products/:id" element={
          <ProductDetail />
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
