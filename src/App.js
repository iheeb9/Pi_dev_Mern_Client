import './App.css';
import Navbar from './composants/Navbar/Navbar';
import Footer from './composants/Footer/footer';
import Home from './composants/Home/home';
import { BrowserRouter,Route } from 'react-router-dom';
import Notfound from './composants/Notfound/Notfound';
import { useEffect } from 'react';
import Annonce from './composants/Annonce/annonce';
import Allproduct from './composants/shop/Allproduct';
import Login from './composants/register&login/register_login'
import ForgotPassword from './composants/register&login/ForgotPassword'
import Notify from './Tools/notify';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/action/authAction';
import UserProfile from './composants/user/userProfil';
import ResetPassword from './composants/register&login/ResetPassword';
import { Redirect } from 'react-router-dom';
import Animation from './Tools/Animation';
import DetailAnnonce from './composants/Annonce/detailAnnonce';
import { useHistory } from 'react-router-dom';
import { GetAllUsers } from './redux/action/userAction';

function App() {
const a =useHistory()
 
const auth=useSelector(state=>state.auth);
const {isLogged} = auth

const dispatch=useDispatch()
useEffect(()=>{
 dispatch(refreshToken())
 dispatch(GetAllUsers ())


},[dispatch])

  return (
    <BrowserRouter>
    <div className="App">
     <Notify/>
     <Navbar/>
     
     <Route exact path="/" component={Home}/>
     
     <Route exact path="/register" component={isLogged ? Notfound :Login} />
     <Route exact path="/annonce" component={Annonce}/>
     <Route exact path="/allproduct" component={Allproduct}/>
     <Route exact path="/userprofil/:id" component={UserProfile }/>
     <Route exact path="/detailannonce" component={DetailAnnonce}/>
     <Route exact path="/anim" component={Animation}/>
     <Route exact path="/notfound" component={Notfound}/>
     <Route exact path="/ResetPassword/:token" component={ResetPassword}/>
     <Route exact path="/ForgotPassword" component={ForgotPassword}/>
  
     
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
