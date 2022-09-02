import React from 'react'
import { Button,TextField ,Paper,Grid} from '@mui/material'
import { useAdminContext } from './AdminContext';
const AdminLogin = () => {
    const [username,setUsername] =React.useState('');
    const [password,setPassword] =React.useState('');
    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto" ,alignItems: 'center'}
    const {handleChange,handleSubmit} = useAdminContext()
    
    
    const btnstyle={margin:'8px 0'}
    return(
        <Grid sx={{alignItems: 'center',alignContent: 'center',justifyContent: 'center',mt:'200px'}} >
            <Paper elevation={8} style={paperStyle}>
                <Grid align='center' sx={{mt:'100px'}}>
                     
                    <h2>Admin Sign In</h2>
                </Grid>
                <form>
                <TextField sx={{mb:'10px'}} label='Username' name='username' placeholder='Enter username' onChange={handleChange} variant="outlined" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' name='password' onChange={handleChange} type='password' variant="outlined" fullWidth required/>
                
                <Button type='submit' onClick={handleSubmit} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default AdminLogin