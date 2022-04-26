import React, { useCallback, useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useSelector } from 'react-redux';
import { addToCart } from "../redux/action/cartActions";
import { connect } from "react-redux";

import { getProducts } from '../redux/action/productActions';


const COMMANDS = {
    OPEN_CART : 'open-cart',
    CLOSE_CART: 'close-cart',
    FIND_PRODUCT: 'find-product',
    OPEN_SHOP :'open-shop',
    OPEN_ESHOP:'open-eshop',
    OPEN_ESHOP_SELL:'open-eshop-sell',
    SIGNIN:'open-signin',
    SIGNUP:'open-signup',
    OPEN_PROTOTYPE:'open-prototype',
    OPEN_ALL_PROTOTYPE:'open-allprototype',
    OPEN_BID:'open-bid',
    OPEN_ROOM_BID:'open-roombid'

}





function useAlan() {
    const cart = useSelector((state) => state.cart.cartItems);
  const [alanInstance , setAlanInstance ] = useState()
  const {products} = useSelector((state) => state.products);
  console.log("for find ",products)




 
//View Cart 
    const  openCart  = useCallback(() => {   
              alanInstance.playText("Opening cart")
              setTimeout(() => {  window.location.replace("http://localhost:3000/checkout");  }, 5000);        
    }, [alanInstance])

//Close cart
    const  closeCart  = useCallback(() => {
       
            alanInstance.playText(" Closing Cart")
            setTimeout(() => {  window.location.replace("http://localhost:3000/allproduct");  }, 3000);        
    }, [alanInstance])

//Find Product 
    const  findproduct  = useCallback(({detail : {name , category}}) => {
         const product =products.find(i => i.name.toLowerCase() === name.toLowerCase() )          
         if (product ==null){
             setTimeout(() => {  
            alanInstance.playText(`I cannot find the ${name} item `)
       }, 3000) }else {
           alanInstance.playText(`we find your product  `)
           setTimeout(() => {  window.location.replace(`http://localhost:3000/search/${name}`);  }, 3500);
        }         
    }, [alanInstance,products])

//open shop
const  openshop  = useCallback(() => {     
    alanInstance.playText(" Opening Shop")
    setTimeout(() => {  window.location.replace("http://localhost:3000/allproduct");  }, 3000);        
}, [alanInstance])

//open Eshop
const  openEshop  = useCallback(() => {     
    alanInstance.playText(" Opening EShop")
    setTimeout(() => {  window.location.replace("http://localhost:3000/annonce");  }, 3000);        
}, [alanInstance])

//openEshopsell
const  openEshopsell  = useCallback(() => {      
    alanInstance.playText(" Opening EShop for selling ")
    setTimeout(() => {  window.location.replace("http://localhost:3000/addannonce");  }, 3000);        
}, [alanInstance])

//open sign in
const  signin  = useCallback(() => {   
    alanInstance.playText(" Opening signin page ")
    setTimeout(() => {  window.location.replace("http://localhost:3000/register");  }, 3000);        
}, [alanInstance])

//sign up 
const  signup  = useCallback(() => { 
    alanInstance.playText(" Opening signup page ")
    setTimeout(() => {  window.location.replace("http://localhost:3000/register");  }, 3000);        
}, [alanInstance])
//open Prototype
const  openPrototype  = useCallback(() => {
    alanInstance.playText(" Opening new prototype page ")
    setTimeout(() => {  window.location.replace("http://localhost:3000/shareprototype");  }, 3000);        
}, [alanInstance])

//all prototype
const  openAllPrototype  = useCallback(() => {
    alanInstance.playText(" Opening All prototype page")
    setTimeout(() => {  window.location.replace("http://localhost:3000/allprototype");  }, 3000);        
}, [alanInstance])

//open bid page
const  openBid  = useCallback(() => {
    alanInstance.playText(" Opening  biding page")
    setTimeout(() => {  window.location.replace("http://localhost:3000/auction-details");  }, 3000);        
}, [alanInstance])

//open new room bid page
const  openRoomBid  = useCallback(() => {
    alanInstance.playText(" Opening  new room for biding")
    setTimeout(() => {  window.location.replace("http://localhost:3000/auction");  }, 3000);        
}, [alanInstance])


   

    useEffect(()=>  {
        window.addEventListener(COMMANDS.OPEN_CART,openCart)
        window.addEventListener(COMMANDS.CLOSE_CART,closeCart)
        window.addEventListener(COMMANDS.FIND_PRODUCT,findproduct)
        window.addEventListener(COMMANDS.OPEN_SHOP,openshop)
        window.addEventListener(COMMANDS.OPEN_ESHOP,openEshop)
        window.addEventListener(COMMANDS.OPEN_ESHOP_SELL,openEshopsell)
        window.addEventListener(COMMANDS.SIGNIN,signin)
        window.addEventListener(COMMANDS.SIGNUP,signup)
        window.addEventListener(COMMANDS.OPEN_PROTOTYPE,openPrototype)
        window.addEventListener(COMMANDS.OPEN_ALL_PROTOTYPE,openAllPrototype)
        window.addEventListener(COMMANDS.OPEN_BID,openBid)
        window.addEventListener(COMMANDS.OPEN_ROOM_BID,openRoomBid)
        return () => {
            window.addEventListener(COMMANDS.OPEN_CART,openCart)
            window.addEventListener(COMMANDS.CLOSE_CART,closeCart)
            window.addEventListener(COMMANDS.FIND_PRODUCT,findproduct)
            window.addEventListener(COMMANDS.OPEN_SHOP,openshop)
            window.addEventListener(COMMANDS.OPEN_ESHOP,openEshop)
            window.addEventListener(COMMANDS.OPEN_ESHOP_SELL,openEshopsell)
            window.addEventListener(COMMANDS.SIGNIN,signin)
            window.addEventListener(COMMANDS.SIGNUP,signup)
            window.addEventListener(COMMANDS.OPEN_PROTOTYPE,openPrototype)
            window.addEventListener(COMMANDS.OPEN_ALL_PROTOTYPE,openAllPrototype)
            window.addEventListener(COMMANDS.OPEN_BID,openBid)
            window.addEventListener(COMMANDS.OPEN_ROOM_BID,openRoomBid)
        }
    },[openCart, closeCart,products,findproduct,])

    
    useEffect(() => {

        setAlanInstance(
    alanBtn({
       left:"20px",
        top: "10px" ,
        key: process.env.REACT_APP_ALLAN_KEY,
        onCommand: ({command,payload}) => {
            window.dispatchEvent(new CustomEvent(command,{detail : payload}))
             
        }
       
    })
        )
  }, []);
  return (
      
    <div>Alan</div>
  )
}

export default useAlan