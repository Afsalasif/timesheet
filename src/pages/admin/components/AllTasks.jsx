import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';









const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>


    </React.Fragment>
);



const AllTasks = (taskdata) => {
    // console.log(taskdata.taskdata)
    const { task, userdata, date, a,time } = taskdata.taskdata
    // console.log(a)
    // console.log(task)
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {userdata}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {task}
                    </Typography>
                    
                    <Typography variant="body2">
                        created at  <Moment format="YYYY/MM/DD">
                            {a}
                        </Moment>
                        <br />
                        <Typography sx={{ mt: 1.5 }} color="text.secondary">
                        {date}
                    </Typography>
                        to be completed within {time}
                    </Typography>
                    <Moment date={`${date}t${time}`}
                    durationFromNow
            />
                </CardContent>
            </Card>
        </Box>
    )
}

export default AllTasks
