import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';



import { AdminContextProvider } from './pages/admin/AdminContext';
import Adminmain from './pages/admin/Adminmain';
import { UserContextProvider } from './pages/user/userContext';

import UserMain from './pages/user/UserMain';

const App = () => {



  return (


    <BrowserRouter>
      <Routes>

        <Route path='/admin' exact element={<AdminContextProvider><Adminmain /></AdminContextProvider>} />

        <Route path='/' exact element={<UserContextProvider><UserMain /></UserContextProvider> }/>


      </Routes>
    </BrowserRouter>
  );
}


export default App;
