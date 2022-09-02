import React from 'react'

const Userr = (userdata) => {
    console.log(userdata)
  return (
    <div>{userdata.userdata.email}</div>
  )
}

export default Userr