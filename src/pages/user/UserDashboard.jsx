import { Box, Button } from '@mui/material'
import React from 'react'
import Checker from './Checker'
import Navbar from './components/Navbar'
import { useUserContext } from './userContext'


const UserDashboard = () => {
    const {userSignout,userDetails}=useUserContext()
    console.log(userDetails.email)
  return (
    <Box>
        <Navbar />
        <Checker/>
         
    </Box>

       
    
  )
}

export default UserDashboard