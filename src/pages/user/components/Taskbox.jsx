import React, { useEffect } from 'react'
import { useUserContext } from '../userContext'
import ThatTask from './ThatTask'

const Taskbox = (taskdata) => {
    const {user}=useUserContext()
    const [show2,setShow2]=React.useState(false)
    // console.log(taskdata)
    
    // console.log(p)
    useEffect(() => {
        if(taskdata.taskdata.userdataid===user.uid){
        
            setShow2(true)
        }else{
           
            setShow2(false)
        }
    
    }, []);
   
  return (
    <div>
        {show2?<ThatTask taskdata={taskdata.taskdata} />:null}
    </div>
      
    
  )
}

export default Taskbox
