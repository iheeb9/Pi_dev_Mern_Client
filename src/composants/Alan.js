import React, { useCallback, useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useSelector } from 'react-redux';
import { addToCart } from "../redux/action/cartActions";
import { connect } from "react-redux";

import { getProducts } from '../redux/action/productActions';


const COMMANDS = {
    OPEN_CART : 'open-cart',
    CLOSE_CART: 'close-cart',
    ADD_ITEM:  'add-item'
}



const a=2

function useAlan() {
    const cart = useSelector((state) => state.cart.cartItems);
        console.log("chat cart",cart)
  const [alanInstance , setAlanInstance ] = useState()

 

    const  openCart  = useCallback(() => {
        if (cart.length === 0 ){
            alanInstance.playText("cart is empty")
        }else{
              alanInstance.playText("Opening cart")
              setTimeout(() => {  window.location.replace("http://localhost:3000/checkout");  }, 5000);
             
           

        }  console.log("function de open cart",cart)
    }, [alanInstance,cart])


    const  closeCart  = useCallback(() => {
        if (cart.length == 0){
             alanInstance.playText(" you have no items in your cart ")
        }else{
            alanInstance.playText(" Closing Cart")
            setTimeout(() => {  window.location.replace("http://localhost:3000/allproduct");  }, 3000);
        }
             
    }, [alanInstance])

   

 const {products} = useSelector((state) => state.products);

 console.log(products)
 //const pro =products.find(i => i.name.toLowerCase() ==="hp")
 //console.log("recherche produsct",pro)


    const addItem =  useCallback(({detail : {name , quantity}})=>{
        const product =products.find(i => i.name.toLowerCase() === name.toLowerCase() )
        console.log("getproducts2",product)
     
         if (product ==null){
            alanInstance.playText(`I cannot find the ${name} item `)
        }else {
            console.log("produit li yetzed ",product)
             
         
            alanInstance.playText(`Item ${name} was added to your cart `)
            addToCart(product)
        }
    

    },[alanInstance,products])
   
     useEffect(()=>  {
        window.addEventListener(COMMANDS.OPEN_CART,openCart)
        window.addEventListener(COMMANDS.CLOSE_CART,closeCart)
        window.addEventListener(COMMANDS.ADD_ITEM,addItem)



        return () => {
            window.addEventListener(COMMANDS.OPEN_CART,openCart)
            window.addEventListener(COMMANDS.CLOSE_CART,closeCart)
            window.addEventListener(COMMANDS.ADD_ITEM,addItem)


        }
    },[openCart, closeCart,addItem])

    
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

export default useAlan;connect((state) => ({}), {
    addToCart,
  });
