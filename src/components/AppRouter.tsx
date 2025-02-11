import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { LoginCallback } from './login/LoginCallback';
import Home from './Home';
import AutenticatedHome from './AutenticatedHome';
import Dashboard from './views/Dashboard';
import Customers from './views/Customers';
import { useLogto } from '@logto/react';

function AppRouter() {
  const { isAuthenticated, isLoading } = useLogto();

  if (isLoading) {
    return <div>Loading...</div>; // Mostra un loader durante il caricamento
  }

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/callback" element={<LoginCallback />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <AutenticatedHome component={<Dashboard />} /> : <Navigate to="/" />}
        />
        <Route
          path="/customers"
          element={isAuthenticated ? <AutenticatedHome component={<Customers />} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter