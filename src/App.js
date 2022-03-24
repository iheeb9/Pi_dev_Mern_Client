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
import DetailAnnonce from './composants/Annonce/detailAnnonce';
import { useHistory } from 'react-router-dom';
import AddAnnonce from './composants/Annonce/addAnnonce';
import { getPosts } from './redux/action/postAction';
import UpdateAnnonce from './composants/Annonce/updateAnnonce';
import Shareprototype from './composants/protoype/shareprototype';
import Allprototype from './composants/protoype/Allprototype';
import SharedprototypeDetail from './composants/protoype/sharedprototypeDetail';
import { getsharedpost } from './redux/action/sharedpostAction';
import { GetAllUsers } from './redux/action/userAction';
import ResetPassword from './composants/register&login/ResetPassword'
function App() {
  const a =useHistory()
const {auth} =useSelector(state=>state);
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(refreshToken())
 dispatch(getPosts())
 dispatch(GetAllUsers ())
},[dispatch])



useEffect(()=>{
  if (auth.token){
    dispatch(getsharedpost(auth.token))}
  
},[dispatch,auth.token])

  return (
    <BrowserRouter>
    <div className="App">
     <Notify/>
     <Navbar/>
     
     <Route exact path="/" component={Home}/>
     
     <Route exact path="/register" component={Login} />
     <Route exact path="/annonce" component={Annonce}/>
     <Route exact path="/allproduct" component={Allproduct}/>
     <Route exact path="/detailannonce/:id" component={DetailAnnonce}/>
     <Route exact path="/userprofil/:id" component={UserProfile }/>
     <Route exact path="/anim" component={Animation}/>

     <Route exact path="/notfound" component={Notfound}/>
     <Route exact path="/ResetPassword/:token" component={ResetPassword}/>
     <Route exact path="/ForgotPassword" component={ForgotPassword}/>
  
     
     <Route exact path="/addannonce" component={AddAnnonce}/>
     <Route exact path="/updateAnnonce/:id" component={UpdateAnnonce}/>
     <Route exact path="/shareprototype" component={Shareprototype}/>
     
     <Route exact path="/Allprototype" component={Allprototype}/>
     <Route exact path="/sharedprototypedetail/:id" component={SharedprototypeDetail}/>
     
     
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
