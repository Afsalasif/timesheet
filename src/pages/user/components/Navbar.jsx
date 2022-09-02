import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

import { useUserContext } from '../userContext';
// import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    const{userSignout,userDetails} =useUserContext()
    
    const {setSelected,selected}=useUserContext()

    console.log(selected)
  return (
    <Stack direction='row'
     justifyContent='space-around'
     sx={{
        gap:{sm:'122px',xs:'40px'},
        height:'70px',
        justifyContent:'none',
        backgroundColor:'black',
        
     }}

     px="20px"
    >
        <Typography sx={{marginTop:'23px'}} variant="h5" color='white'>{userDetails.email} </Typography>
        
        <Stack 
         direction='row'
         gap='40px'
         fontSize='24px'
         justifyContent="space-evenly"
         margin='auto'
        >    <Button onClick={()=>setSelected('mytask')} >MY TASK</Button>
             <Button onClick={()=>setSelected('addtask')} >ADD TASK</Button>
             
           
            
        </Stack>
        <Button onClick={userSignout}>Logout</Button>
    </Stack>
  )
}

export default Navbar