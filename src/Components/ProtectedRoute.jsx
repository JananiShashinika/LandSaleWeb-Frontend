import React from 'react'
import { Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('jwtToken');

   
    return isAuthenticated ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/Login" replace />
    );
  
}

export default ProtectedRoute;
