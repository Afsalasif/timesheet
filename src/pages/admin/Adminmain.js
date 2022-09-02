import React, { useEffect } from 'react';
import {AdminContextProvider, useAdminContext} from './AdminContext'
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { Route, Routes } from 'react-router-dom';


const Adminmain = () => {
    const {admin,checkuser}=useAdminContext();
    useEffect(() => {
      checkuser()
    }, []);

  return (
    <div>
      
      { admin?<AdminDashboard />:<AdminLogin/> }
      
      
    </div>
  

    
  )
}

export default Adminmain
