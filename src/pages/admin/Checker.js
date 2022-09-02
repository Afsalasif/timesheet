import React from 'react'
import { useAdminContext } from './AdminContext'
import AddUser from './components/AddUser'
import AllTasks from './components/AllTasks'
import ChartView from './components/ChartView'
import TaskPage from './components/TaskPage'
import Users from './components/Users'

const Checker = () => {
  const{selected}=useAdminContext()
  console.log(selected)
  
  if(selected==='adduser'){
    return <AddUser/>
  }else if(selected==='home'){
    return <TaskPage />
  }
  else if(selected==='users'){
    return < Users />
  }else if(selected==='task'){
    return <ChartView />
  }

}

export default Checker
