import { useEffect, useState } from "react";

export function CheckoutPayment({ value, canProceedChange, onValueChange }) {
  const [paymentData, setPaymentData] = useState({});
  const requiredInputs = ["payment", "number", "validUntil", "cvc"];

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
      <form class="form" method="post">
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
        </div>
      </form>
    </>
  );
}
