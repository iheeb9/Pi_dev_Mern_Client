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
import Notify from './Tools/notify';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/action/authAction';
import UserProfile from './composants/user/userProfil';
import { Redirect } from 'react-router-dom';
import Animation from './Tools/Animation';
import DetailAnnonce from './composants/Annonce/detailAnnonce';
import { useHistory } from 'react-router-dom';
function App() {
  const a =useHistory()
  console.log(a)
const {auth} =useSelector(state=>state);
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(refreshToken())

},[dispatch])

  return (
    <BrowserRouter>
    <div className="App">
     <Notify/>
     <Navbar/>
     
     <Route exact path="/" component={Home}/>
     
     <Route exact path="/register" component={Login}/>
     <Route exact path="/annonce" component={Annonce}/>
     <Route exact path="/allproduct" component={Allproduct}/>
     <Route exact path="/userprofil" component={UserProfile}/>
     <Route exact path="/detailannonce" component={DetailAnnonce}/>
     <Route exact path="/anim" component={Animation}/>
     <Route exact path="/notfound" component={Notfound}/>
     
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
