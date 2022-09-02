import React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc,addDoc,collection } from "firebase/firestore";
import { auth, db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { async } from '@firebase/util';

const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [userForm, setUserForm] = React.useState({})
    const [userExist, setUserExist] = React.useState(false)
    const [userDetails, setUserDetails] = React.useState({})
    const [selected, setSelected] = React.useState('mytask')
    const [user, setUser] = React.useState(null)
    const [intialLoading, setInitialLoading] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [toDoData, setToDoData] = React.useState({})

    const handleToDoChange =(event)=>{
        setToDoData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const handleToDoSubmit =async (e)=>{
        e.preventDefault()
        const task =toDoData.taskname
        const time =toDoData.tasktime
        const date =toDoData.taskdate
        const userdata = user.email
        const userdataid =user.uid
        const a = firebase.firestore
          .Timestamp.now().toDate().toString()
        const docRef = await addDoc(collection(db, "todos"), {
            task,time,date,userdata,userdataid,a
          });
        alert('added')
        
    }
    // React.useEffect(()=>{
    //     console.table(toDoData)
    // },[toDoData])

    const handleUserChange = (event) => {
        setUserForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));


    };
   
    React.useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    
                    console.log('yes')
                    setUser(user)
                    setUserDetails(user)

                    setLoading(false)
                } else {
                    
                    setUser(null)
                    setLoading(true)

                }

                setInitialLoading(false)
            }),
        [auth]
    )
    React.useEffect(() => {
        if (user) {
            const cityRef = doc(db, 'users', `${user.uid}`);
            setDoc(cityRef, { email: user.email }, { merge: true });
        }
    })


    const userSignin = async (e) => {
        e.preventDefault();
        const email = userForm.usermail;
        const password = userForm.userpass;
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUserDetails(userCredential.user)
                setUser(userCredential.user)
                alert('succes')
                console.log(user)


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                setUserExist(false)
            });
    }
    React.useEffect(() => {
        console.log(user)
    }, [])


    const userSignout = async (e) => {
        signOut(auth).then(() => {
            setUserExist(false);
            setUserDetails(null);
            localStorage.clear();
        }).catch((error) => {

        });
    }


    return (
        <UserContext.Provider value={{ handleUserChange, userExist, userDetails, userSignin, userSignout, selected, setSelected, user,handleToDoChange,toDoData,handleToDoSubmit }} >
            {props.children}
        </UserContext.Provider>
    )
}

const useUserContext = () => React.useContext(UserContext);

export { useUserContext, UserContextProvider }