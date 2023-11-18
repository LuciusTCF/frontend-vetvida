// import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AdminScreen from '../views/AdminScreen';
import ErrorScreen from '../views/ErrorScreen';


const PrimaryRoutes = () => {
    return (
    <Routes>
        <Route path='/admin' element={<AdminScreen/>} />
        <Route path="*" element = {<ErrorScreen/>} />
    </Routes>
    )
}

export default PrimaryRoutes;
