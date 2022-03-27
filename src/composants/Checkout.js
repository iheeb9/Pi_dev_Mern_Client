import React from "react";
import {
  createOrder,
  clearOrder,
  fetchOrders,
} from "../redux/action/orderAction";
import { removeFromCart } from "../redux/action/cartActions";
import { connect } from "react-redux";
import CheckoutCart from "./checkout/CheckoutCart";
import { CheckoutDeliveryAddress } from "./checkout/CheckoutDeliveryAddress";
import { CheckoutPayment } from "./checkout/CheckoutPayment";
import { CheckoutFinish } from "./checkout/CheckoutFinish";
import { CheckoutSummary } from "./checkout/CheckoutSummary";

export function Checkout({ cartItems }) {
  return (
    <div>
      <section id="contact-us" class="contact-us section checkout">
        <div class="container">
          <div class="checkout-progress-bar-container">
            <div class="checkout-progress-bar">
              <div class="step active"></div>
              <div class="step"></div>
              <div class="step"></div>
              <div class="step"></div>
            </div>
          </div>
          <div class="contact-head">
            <div class="row">
              <div class="col-lg-8 col-12">
                <div class="form-main">
                  <div class="title">
                    <h3>Checkout here!</h3>
                  </div>
                  <CheckoutCart />
                  {/* <CheckoutDeliveryAddress /> */}
                  {/* <CheckoutPayment /> */}
                  {/* <CheckoutFinish /> */}
                  <div class="panel-footer">
                    <button class="btn back-btn">Back</button>
                    <button class="btn next-btn">Next Step</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <CheckoutSummary />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
    fetchOrders,
  }
)(Checkout);
