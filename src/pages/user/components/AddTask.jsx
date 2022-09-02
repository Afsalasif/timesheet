import { Button, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import { useUserContext } from '../userContext'

const AddTask = () => {
  const{handleToDoChange,handleToDoSubmit}=useUserContext()
    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto" ,alignItems: 'center'}
    
    const btnstyle={margin:'8px 0'}
  return (
    <Grid sx={{alignItems: 'center',alignContent: 'center',justifyContent: 'center',mt:'200px'}} >
            <Paper elevation={8} style={paperStyle}>
                <Grid align='center' sx={{mt:'100px'}}>
                     
                    <h2>ADD TASK</h2>
                </Grid>
                <form>
                <TextField sx={{mb:'10px'}} name="taskname" onChange={handleToDoChange}  label='Taskname' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField sx={{mb:'10px'}} label='date' onChange={handleToDoChange} name='taskdate'  placeholder='Enter password' type='date' variant="outlined" fullWidth required/>
                <TextField label='time' name='tasktime' onChange={handleToDoChange} placeholder='Enter password' type='time' variant="outlined" fullWidth required/>
                
                <Button type='submit' onClick={handleToDoSubmit}  color='primary' variant="contained" style={btnstyle} fullWidth>ADD</Button>
                </form>
            </Paper>
        </Grid>
  )
}

export default AddTask