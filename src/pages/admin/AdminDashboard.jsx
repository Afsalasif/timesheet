import { Box } from '@mui/material'
import React from 'react'
import { useAdminContext } from './AdminContext'
import Checker from './Checker'
import Navbar from './components/Navbar'

const AdminDashboard = () => {

 
  
  return (
    
    <Box >
      <div style={{position:'sticky'}} ><Navbar /></div>
      
      <Checker />
    </Box>
    
    
  
    )

}

export default AdminDashboard
