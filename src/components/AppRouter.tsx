import React, { JSX } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { LoginCallback } from './login/LoginCallback';
import Home from './Home';
import AutenticatedHome from './AutenticatedHome';
import { useLogto } from '@logto/react';
import siteMap from '@/utils/siteMap';

function AppRouter() {
  const { isAuthenticated, isLoading } = useLogto();

  if (isLoading) {
    return <div>Loading...</div>; // Mostra un loader durante il caricamento
  }

  const renderSitemapRoutes: () => JSX.Element[] = () => {
    return siteMap.map(element => {
      return (  
      <Route
        path={element.pageType === 'detail' ? `${element.path}/:id` : element.path}
        element={isAuthenticated ? <AutenticatedHome component={<element.component />} pageType={element.pageType} /> : <Navigate to="/" />}
      />
    );
    })
  }

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/callback" element={<LoginCallback />} />
        <Route path="/" element={<Home />} />
        {renderSitemapRoutes()}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter