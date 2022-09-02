
import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { db } from '../../../firebase';
import Userr from './Userr';

const Users = () => {
    const [userOb,setUserOb] = React.useState({})
    React.useEffect(()=>{
        getusers()
    },[])
    const getusers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach((doc) => {
            setUserOb((prevstate) => ({
                ...prevstate, 
                [doc.id] : doc.data()
            }))
            // console.log(doc.id, " => ", doc.data());
        });
        // setSnap(querySnapshot)

    }
    const keyss= Object.keys(userOb)

  return (
    <div>
        {keyss.map((key)=>(
            <Userr key={key} userdata={userOb[key]} />
        ))}

    </div>
  )
}

export default Users