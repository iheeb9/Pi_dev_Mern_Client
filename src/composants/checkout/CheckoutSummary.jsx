export function CheckoutSummary() {
  return (
    <>
      <div
        class="single-head"
        style={{
          padding: "2em",
        }}
      >
        <div class="row single-info mb-0">
          <div class="col-3">
            <i class="fa fa-shopping-basket"></i>
          </div>
          <div class="col-9" style={{ paddingTop: ".5em" }}>
            <h4 class="title"> Summary</h4>
          </div>
        </div>
        <h6
          style={{
            fontSize: "10px",
            textAlign: "left",
            margin: "0px",
            color: "#757575",
          }}
        >
          The total cost consists of the tax, insurance, and the shipping
          charge.
        </h6>
        <hr />
        <div>
          <div class="d-flex justify-content-between">Price: 100 Euros</div>
          <div class="d-flex justify-content-between">
            Delivery Charges: 30 Euros
          </div>
          <div class="d-flex justify-content-between">
            Discount Price: 10 Euros
          </div>
        </div>
        <hr />
        <div class="row align-items-end">Total: 140 Euros</div>
      </div>
    </>
  );
}
