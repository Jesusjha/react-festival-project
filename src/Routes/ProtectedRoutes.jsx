import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
	const { user } = useContext(AuthContext);

	return ( user.name  
  ? children 
  : <Navigate to='/login' />)
};

export default ProtectedRoutes;
