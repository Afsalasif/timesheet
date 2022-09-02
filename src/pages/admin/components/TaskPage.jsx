import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import AllTasks from './AllTasks'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';



const TaskPage = () => {
    const [taskl, setTaskl] = React.useState({})
    const [snap, setSnap] = React.useState({})
    React.useEffect(() => {
        getDatafunc();


    }, []);
    const getDatafunc = async () => {
        const querySnapshot = await getDocs(collection(db, "todos"));

        querySnapshot.forEach((doc) => {
            setTaskl((prevstate) => ({
                ...prevstate, 
                [doc.id] : doc.data()
            }))
            // console.log(doc.id, " => ", doc.data());
        });
        setSnap(querySnapshot)

    }
    // React.useEffect(() => {
    //     console.log(taskl)
        
    // }, [taskl])
    const keys=Object.keys(taskl)
    // console.log(keys)
    // useEffect(()=>{
    //     getDatafunc()
    // })
    return (
        <div>
           
          {keys.map((key) => (
            <AllTasks id={key} taskdata={taskl[key]} />
          ))}
        </div>

    )

}

export default TaskPage