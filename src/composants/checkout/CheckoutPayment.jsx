import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function CheckoutPayment({ value, canProceedChange, onValueChange }) {
  const [paymentData, setPaymentData] = useState({});
  //const cartItems  = useSelector((state) => state.cart.cartItems);

  const requiredInputs = ["payment", "name", "number", "validUntil", "cvc"];



/* // payement 
 const stripe = useStripe();
  const elements = useElements();
  const  PUBLIC_KEY= "pk_test_51KoSyaBSBzdg4Hx8lJGrXaCFSb0n3KAy65hzk3mQl4TFC3UztX4AKYU9dKc1Tz4aX21NFzEKo2FXPT1lx5TszkeB00i04DlPDv"

  const stripeTestPromise = loadStripe(PUBLIC_KEY);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
    } else {
      console.log(error.message);
    }
  }; */

  useEffect(() => {
    validate();
  
    setPaymentData(value);
  }, []);

 


  useEffect(() => {
    validate();
    onValueChange(paymentData);
  }, [paymentData]);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  }

  function validate() {
    canProceedChange(requiredInputs.every((val) => paymentData[val]));
  }

  return (
    <>
      <div class="payment-method">
        <label for="card" class="method method-card">
          <div class="card-logos">
            <img src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png" />
            <img src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png" />
          </div>

          <div class="radio-input">
            <input
              id="card"
              type="radio"
              name="payment"
              value="card"
              checked={paymentData.payment === "card"}
              onChange={handleChangeInput}
            />
            Pay with credit card
          </div>
        </label>

        <label for="paypal" class="method paypal">
          <img src="https://designmodo.com/demo/checkout-panel/img/paypal_logo.png" />
          <div class="radio-input">
            <input
              id="paypal"
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentData.payment === "paypal"}
              onChange={handleChangeInput}
            />
            Pay with PayPal
          </div>
        </label>
      </div>
      {/* <form  onSubmit={handleSubmit} class="form"> */}

      <form   class="form">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>
                Name<span>*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder=""
                value={paymentData.name || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>
                Card Number
                <span>*</span>
              </label>
              <input
                name="number"
                type="text"
                placeholder=""
                value={paymentData.number || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="form-group">
              <label>
                Valid date
                <span>*</span>
              </label>
              <input
                name="validUntil"
                type="text"
                placeholder=""
                value={paymentData.validUntil || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="form-group">
              <label>
                CVV / CVC<span>*</span>
              </label>
              <input
                name="cvc"
                type="text"
                placeholder=""
                value={paymentData.cvc || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="col-6 p-0 mt-4 ccv-info">
            <p>
              * CVV or CVC is the card security code, unique three digits number
              on the back of your card separate from its number.
            </p>
          </div>
          <div>
               <button className="btn btn-warning">payement</button>
          </div>
       
        </div>
      </form>
    </>
  );
}
