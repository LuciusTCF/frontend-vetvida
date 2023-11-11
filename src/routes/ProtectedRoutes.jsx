// import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoutes = ( {children}) => {

    const user = JSON.parse(localStorage.getItem('user')) || null;
    
    if(user == 'admin@admin.com'){
        return children
    }else{
        <Navigate to='/admin' />
    }
//   return (
    
//   )
}

export default ProtectedRoutes;