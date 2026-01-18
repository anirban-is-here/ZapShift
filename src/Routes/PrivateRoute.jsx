import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <Navigate  to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;