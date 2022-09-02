import React from 'react'
import { useUserContext } from './userContext'
import UserDashboard from './UserDashboard'
import UserLogin from './UserLogin'

const UserMain = () => {
  const {userExist,checkuser1,user} = useUserContext()
  // console.log(user)
  // React.useEffect(()=>{
  //   checkuser1()
  // },[])
  return (
    <div>{
       user ? <UserDashboard/>:<UserLogin/>
      }</div>
  )
}

export default UserMain