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
import Detailsproduct from './composants/Product/detailsproduct'
import { AddProd } from './composants/dashboardAd/AdminProduct/AddProd';
import Loading from './Tools/Loading';
import ListP from './composants/dashboardAd/AdminProduct/ListP';
import NavBar from './composants/dashboardAd/basedashboard/NavBar';
import SideBar from './composants/dashboardAd/basedashboard/SideBar';
import UpProd from './composants/dashboardAd/AdminProduct/UpProd';
import Addcat from './composants/dashboardAd/admincategory/Addcat';
import { getProducts } from './redux/action/productActions';
import Cp from './composants/dashboardAd/AdminProduct/cp';
function App() {
  const a =useHistory()
const {auth,allproductr} =useSelector(state=>state);
const cond=false
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(refreshToken())
 dispatch(getProducts())

},[dispatch])

  return (
    <BrowserRouter>
    {cond?
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
    <Route exact path="/detailp/:id" component={Detailsproduct}/>
    <Route exact path="/search/:keyword" component={Allproduct}/>


      


     {/* admin */}




    <Route exact path="/notfound" component={Notfound}/>

   
    
    
      <Footer/>
 

   </div>:<div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />

      <div className="app-main">
        <SideBar />
        <div className="app-main__outer">
     <Route exact path="/addp" component={AddProd}/>
     <Route exact path="/listp" component={ListP}/>
     <Route exact path="/upp/:id" component={UpProd}/>
    <Route exact path="/category" component={Addcat}/>  
     {/* <Route exact path="/cp" component={Cp}/>   */}


    
     </div>
      </div>
    </div>
     }
    </BrowserRouter>
    
  );
}

export default App;
