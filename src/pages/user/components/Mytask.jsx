import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../firebase'
import { useUserContext } from '../userContext'
import Taskbox from './Taskbox'

const Mytask = () => {
    const [myTask,setMyTask] =React.useState({})
    const [mySnap,setMySnap] =React.useState({})
    const [show,setShow] =React.useState(false)
    const{user}=useUserContext()
    React.useEffect(() => {
        getDatafunc();


    }, []);

    const getDatafunc = async () => {
        const querySnapshot = await getDocs(collection(db, "todos"));

        querySnapshot.forEach((doc) => {
            setMyTask((prevstate) => ({
                ...prevstate, 
                [doc.id] : doc.data()
            }))
            // console.log(doc.id, " => ", doc.data());
        });
        setMySnap(querySnapshot)

    }
    const keys1=Object.keys(myTask)
    // keys1.forEach((key) =>{
    //     if(myTask[key].userdataid===user.uid){
    //         console.log("hey")
            
            
           
    //     }else{
    //         setShow(false)
    //     }
        
    // })
 return(
    <div> {keys1.map((key) => (
        
        <Taskbox key={key} taskdata={myTask[key]}  />
      ))}
      </div>
 )
}

export default Mytask
