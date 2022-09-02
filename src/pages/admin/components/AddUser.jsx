import React from 'react'
import { Button,TextField ,Paper,Grid} from '@mui/material'
import { useAdminContext } from '../AdminContext'
import AdminLogin from '../AdminLogin'
const AddUser = () => {
    const {admin,handleUserChange,createUser} =useAdminContext()
    const btnstyle={margin:'8px 0'}
    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto" ,alignItems: 'center'}
    if(admin){
    return(
        <Grid sx={{alignItems: 'center',alignContent: 'center',justifyContent: 'center',mt:'200px'}} >
            <Paper elevation={8} style={paperStyle}>
                <Grid align='center' sx={{mt:'100px'}}>
                     
                    <h2>add a new user</h2>
                </Grid>
                <form>
                <TextField sx={{mb:'10px'}} label='Username' name='emailuser' onChange={handleUserChange} placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' name='passuser' onChange={handleUserChange}  type='password' variant="outlined" fullWidth required/>
                
                <Button type='submit' onClick={createUser}   color='primary' variant="contained" style={btnstyle} fullWidth>add</Button>
                </form>
            </Paper>
        </Grid>
    )}else{
        return <AdminLogin />
    }
}

export default AddUser