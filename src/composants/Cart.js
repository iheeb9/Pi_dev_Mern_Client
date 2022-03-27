import React, { Component, useEffect, useState } from "react";
import { Fade, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/action/cartActions";
import { createOrder, clearOrder, fetchOrders } from "../redux/action/orderAction";


function Cart({ cartItems, removeFromCart, createOrder, order, clearOrder }) {
  useEffect(() => {
    console.log("Cart items", cartItems);
  }, [cartItems]);

  function getTotalItems() {
    return cartItems
      ?.map((item) => item.count)
      .reduce((sum, current) => sum + current, 0);
  }
  const [showCheckout, setshowCheckout] = useState(false);
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");

  function placeOrder  (e){
    const order = {
      name: "chh",
      email:"email",
      address: "address",
      cartItems: cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
   createOrder(order);
  };



  return (
    <>

      <div class="shopping-item">
        <div class="dropdown-cart-header">
          <span>{getTotalItems()} Items</span>
          <a href="#">View Cart</a>
        </div>
        <ul class="shopping-list">
          {cartItems.map((item) => (
            <li>
              <a
                href="#"
                class="remove"
                title="Remove this item"
                onClick={() => removeFromCart(item)}
              >
                <i class="fa fa-remove"></i>
              </a>
              <a class="cart-img" href="#">
                <img src={item.image[0].url} alt="#" />
              </a>
              <h4>
                <a href="#">{item.name}</a>
              </h4>
              <p class="quantity">
                {item.count}x - <span class="amount">${item.price}</span>
              </p>
            </li>
          ))}
        </ul>
        <div class="bottom">
          <div class="total">
            <span>Total</span>
            <span class="total-amount">
              ${cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            </span>
          </div>
          <button
            onClick={() => setshowCheckout(!showCheckout)}
            className="button primary"
          >make order </button>
          {showCheckout && (
            <div right cascade>
              <div className="cart">
                <form >
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      ></input>
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      ></input>
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        onChange={(e) => {
                          setaddress(e.target.value);
                        }}
                      ></input>
                    </li>
                    <li>
                      <button className="button primary" onClick={placeOrder}>
                        Checkout
                      </button> <a href="checkout.html" class="btn animate">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          )}


        </div>
      </div>
      
    </>
  );
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
    order: state.order.order,
  }),
  {
    removeFromCart,
    createOrder,
    clearOrder,
    fetchOrders
  }
)(Cart);
