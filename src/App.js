
import './App.css';
// import Navbar from './Components/FrontPage/Navbar';
import { Route, Routes } from 'react-router-dom';
import FrontHomePage from './Components/FrontPage/HomePage';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import Profile from './Components/Profile/Profile';
import ViewProfile from './Components/Profile/ViewProfile';
import EditProfile from './Components/Profile/EditProfile';
import Fallback from './Components/Fallback';
// import Profile from './Components/Profile/Profile';

function App() {
  const user = {
    firstName: "Dipanwita",
    lastName: "Dutta",
    email: "fsudwisjkj@gmail.com",
    phoneNumber: "6382639283",
    gender: "female",
    dateOfBirth: "18.04.2000"
  };
  return (
    // <div>
    //   <Navbar/>
    // </div>
    <Routes>
    <Route exact path='/' element={<FrontHomePage />}/>
    <Route exact path='/login' element={<LoginPage />}/>
    <Route exact path='/register' element={<RegisterPage />}/>
    <Route exact path='/profile' element={<ViewProfile user={user}/>}/>
    <Route exact path='/profile/edit' element={<EditProfile user={user}/>}/>
    <Route path='*' element={<Fallback/>}/>
  </Routes>
  );
}
export default App;
