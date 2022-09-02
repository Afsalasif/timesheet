import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { useAdminContext } from '../AdminContext';
// import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    const {selected,setSelected}=useAdminContext()
    const {signOutt}=useAdminContext()
    
  return (
    <Stack direction='row'
     justifyContent='space-around'
     sx={{
        gap:{sm:'122px',xs:'40px'},
        height:'70px',
        justifyContent:'none',
        backgroundColor:'black',
        position: 'sticky',
        
     }}

     px="20px"
    >
        <Typography sx={{marginTop:'23px'}} variant="h5" color='white'>ADMIN </Typography>
        
        <Stack 
         direction='row'
         gap='40px'
         fontSize='24px'
         justifyContent="space-evenly"
         margin='auto'
        >    <Button onClick={()=>setSelected('home')} >home</Button>
             <Button onClick={()=>setSelected('adduser')} >add user</Button>
             <Button onClick={()=>setSelected('task')} >task</Button>
             <Button onClick={()=>setSelected('users')} >users</Button>
           
            
        </Stack>
        <Button onClick={signOutt} >LOGOUT</Button>
    </Stack>
  )
}

export default Navbar