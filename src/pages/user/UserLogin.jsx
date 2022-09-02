import React from 'react'
import { Button,TextField ,Paper,Grid} from '@mui/material'
import { useUserContext } from './userContext'


const UserLogin = () => {
    const {handleUserChange,userSignin}=useUserContext()
    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto" ,alignItems: 'center'}
    
    const btnstyle={margin:'8px 0'}
    return(
        <Grid sx={{alignItems: 'center',alignContent: 'center',justifyContent: 'center',mt:'200px'}} >
            <Paper elevation={8} style={paperStyle}>
                <Grid align='center' sx={{mt:'100px'}}>
                     
                    <h2>Sign In</h2>
                </Grid>
                <form>
                <TextField sx={{mb:'10px'}} name="usermail" onChange={handleUserChange} label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField label='Password' name='userpass' onChange={handleUserChange} placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                
                <Button type='submit' onClick={userSignin} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default UserLogin