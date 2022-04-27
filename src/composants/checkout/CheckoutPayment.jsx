import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StripeContainer from "./StripeContainer";

export function CheckoutPayment({ value, canProceedChange, onValueChange }) {
  const [paymentData, setPaymentData] = useState({});

  const requiredInputs = ["payment", "name", "number", "validUntil", "cvc"];
  const [showItem, setShowItem] = useState(false);



  useEffect(() => {
    validate();
  
    setPaymentData(value);
  }, []);
  const cart = useSelector((state) => state.cart.cartItems);

  const  total=cart.reduce((a, c) => a + c.price * c.count, 0)

 


  useEffect(() => {
    validate();
    onValueChange(paymentData);
  }, [paymentData]);



  function validate() {
    //canProceedChange(requiredInputs.every((val) => paymentData[val]));

  }

  return (
    <>
      <div class="payment-method">
        <label for="card" class="method method-card">
            <img src="https://res.cloudinary.com/socila-marketing/image/upload/v1650729423/stripe_cz6bqy.webp" />

          
            {showItem ? (
				<StripeContainer  />
			) : (
				<>
					<h3>{total}</h3>
					<button className="btn btn-primary" onClick={() => setShowItem(true)}>Payment</button>
				</>
			)}
        </label>

      
      </div>
      {/* <form  onSubmit={handleSubmit} class="form"> */}

     
    </>
  );
}
