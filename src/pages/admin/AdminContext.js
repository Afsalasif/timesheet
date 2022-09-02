import app, { auth, db } from '../../firebase'
import {doc,getDoc} from'firebase/firestore'
import { getAuth,signOut , createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect } from 'react'
import { async } from '@firebase/util'
const AdminContext = React.createContext()



const AdminContextProvider = (props) => {
    const [createdUser, setCreatedUser] = React.useState({})
    const [admin, setAdmin] = React.useState(false)
    const [formData, setFormData] = React.useState({})
    const [user, setUser] = React.useState({})
    const [selected, setSelected] = React.useState('home')
    const [userData, setUserData] = React.useState({})

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData) {
            if (formData['username'] === 'admin' && formData['password'] === 'admin') {
                setUser(formData)
                localStorage.setItem('user', user.username)
                checkuser()
            } else {
                setAdmin(false)
            }
        }
    }

    const checkuser = () => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setAdmin(true);
        }
    }
    const signOutt = () => {
        if (admin) {
            setAdmin(false)
            localStorage.clear();
        }
    }
    const createUserDocument= async (user)=>{
        if (!user) return;

        const userRef = doc(db,"users",`${user.uid}`);
        
        const snapshot = await userRef.getDoc(userRef)
        if(!snapshot){
            const {email} = user;

            try{
                userRef.set({
                    email,
                    user
                })
            }catch(error){
                console.log(error);
            }
        }
    }

    const handleUserChange = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const logout= async ()=>{
        await signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        console.log("signout succes")  
    }

    const createUser = async (e) => {
        const email = userData.emailuser;
        const password = userData.passuser;
        
        e.preventDefault()
        
             await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                createUserDocument(user)
                
                alert("sucsses")
            })
            
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        logout()   


    }









    //   useEffect(()=>{
    //     console.table(userData)
    //   },[userData])

    return (
        <AdminContext.Provider value={{ admin, handleChange, handleSubmit, signOutt, checkuser, selected, setSelected, handleUserChange, createUser }}>
            {props.children}
        </AdminContext.Provider>
    );
}
const useAdminContext = () => React.useContext(AdminContext);

export { useAdminContext, AdminContextProvider };