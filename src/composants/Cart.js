import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/action/cartActions";

function Cart({ cartItems, removeFromCart }) {
  useEffect(() => {
    console.log("Cart items", cartItems);
  }, [cartItems]);

  function getTotalItems() {
    return cartItems
      ?.map((item) => item.count)
      .reduce((sum, current) => sum + current, 0);
  }

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
          <a href="checkout.html" class="btn animate">
            Checkout
          </a>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart }
)(Cart);
