import React from 'react'
import AddTask from './components/AddTask'
import Mytask from './components/Mytask'
import { useUserContext } from './userContext'

const Checker = () => {
    
    const {setSelected,selected}=useUserContext()
    console.log(selected)
  if(selected==='addtask'){
    return <AddTask />
  } else if(selected==='mytask'){
    return<Mytask />
  }
}

export default Checker