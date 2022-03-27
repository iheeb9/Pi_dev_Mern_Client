export function CheckoutPayment() {
  return (
    <>
      <div class="payment-method">
        <label for="card" class="method method-card">
          <div class="card-logos">
            <img src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png" />
            <img src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png" />
          </div>

          <div class="radio-input">
            <input id="card" type="radio" name="payment" />
            Pay AU$20.99 with credit card
          </div>
        </label>

        <label for="paypal" class="method paypal">
          <img src="https://designmodo.com/demo/checkout-panel/img/paypal_logo.png" />
          <div class="radio-input">
            <input id="paypal" type="radio" name="payment" />
            Pay AU$20.99 with PayPal
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
              <input name="title" type="text" placeholder="" onChange={null} />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>
                Card Number
                <span>*</span>
              </label>
              <input name="title" type="text" placeholder="" onChange={null} />
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="form-group">
              <label>
                Valid date
                <span>*</span>
              </label>
              <input name="title" type="text" placeholder="" onChange={null} />
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="form-group">
              <label>
                CVV / CVC<span>*</span>
              </label>
              <input name="title" type="text" placeholder="" onChange={null} />
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
