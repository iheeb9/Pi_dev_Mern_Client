import React, { useState } from "react";
import { placeOrder } from "../redux/action/orderAction";
import { connect } from "react-redux";
import CheckoutCart from "./checkout/CheckoutCart";
import { CheckoutDeliveryAddress } from "./checkout/CheckoutDeliveryAddress";
import { CheckoutPayment } from "./checkout/CheckoutPayment";
import { CheckoutFinish } from "./checkout/CheckoutFinish";
import { CheckoutSummary } from "./checkout/CheckoutSummary";

function Checkout({ cartItems, placeOrder }) {
  const steps = ["cart", "delivery", "payment", "finish"];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [canProceed, setCanProceed] = useState(false);

  const [deliveryAddressData, setDeliveryAddressData] = useState({});
  const [paymentMethodData, setPaymentMethodData] = useState({});

  function canProceedChange(newValue) {
    setCanProceed(newValue);
  }

  function back() {
    if (currentStepIndex) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  }

  function next() {
    if (currentStepIndex === 2) {
      finnishCheckout();
    }

    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  }

  async function finnishCheckout() {
    const order = {
      cartItems,
      shippingAddress: deliveryAddressData,
      paymentMethod: paymentMethodData,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    console.log("order", order);
    await placeOrder(order);
    setCurrentStepIndex(3);
  }

  function getStepClass(requiredStep) {
    if (steps.indexOf(requiredStep) > currentStepIndex - 1) {
      return "step";
    }
    return "step active";
  }

  return (
    <div>
      <section id="contact-us" class="contact-us section checkout">
        <div class="container">
          <div class="checkout-progress-bar-container">
            <div class="checkout-progress-bar">
              <div class={getStepClass("cart")}></div>
              <div class={getStepClass("delivery")}></div>
              <div class={getStepClass("payment")}></div>
              <div class={getStepClass("finish")}></div>
            </div>
          </div>
          <div class="contact-head">
            <div class="row">
              <div class="col-lg-8 col-12">
                <div class="form-main">
                  <div class="title">
                    <h3>Checkout here!</h3>
                  </div>
                  {currentStepIndex === 0 && (
                    <CheckoutCart canProceedChange={canProceedChange} />
                  )}
                  {currentStepIndex === 1 && (
                    <CheckoutDeliveryAddress
                      value={deliveryAddressData}
                      canProceedChange={canProceedChange}
                      onValueChange={setDeliveryAddressData}
                    />
                  )}
                  {currentStepIndex === 2 && (
                    <CheckoutPayment
                      value={paymentMethodData}
                      canProceedChange={canProceedChange}
                      onValueChange={setPaymentMethodData}
                    />
                  )}
                  {currentStepIndex === 3 && <CheckoutFinish />}
                  <div class="panel-footer">
                    {currentStepIndex !== 3 && (
                      <>
                        <button class="btn back-btn" onClick={back}>
                          Back
                        </button>
                        <button
                          class={`btn next-btn ${
                            !canProceed ? "disabled" : ""
                          }`}
                          onClick={next}
                        >
                          Next Step
                        </button>
                      </>
                    )}
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
  }),
  {
    placeOrder,
  }
)(Checkout);
