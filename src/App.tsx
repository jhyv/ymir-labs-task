import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages';

export const App: React.FC<any> = () => {
  return (
    <BrowserRouter basename={'/'} >
      <Routes>
        <Route path="/" element={
          <Navigate to="/home" replace />
        } />
        <Route path="/home" element={
          <Home />
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
