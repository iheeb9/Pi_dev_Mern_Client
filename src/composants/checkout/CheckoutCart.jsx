import { connect } from "react-redux";
import {
  removeFromCart,
  decreaseItemCount,
  increaseItemCount,
} from "../../redux/action/cartActions";

function CheckoutCart({ cartItems, decreaseItemCount, increaseItemCount }) {
  function getItemTotal(itemPrice, itemCount) {
    return `$ ${itemCount * itemPrice}`;
  }

  return (
    <>
      <div class="container checkout">
        {cartItems.map((item) => (
          <div class="checkout-item-row row mb-3">
            <div class="col-2 m-0 p-0">
              <a class="checkout-cart-img" href="#">
                <img src={item.image[0].url} alt="#" />
              </a>
            </div>
            <div class="col-9 d-flex justify-content-between">
              <div class="checkout-cart-item-name">{item.name}</div>
              <div class="mt-3 checkout-item-quantity">
                <span
                  class="checkout-quantity-controls"
                  onClick={() => decreaseItemCount(item)}
                >
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </span>
                {item.count} items
                <span
                  class="checkout-quantity-controls"
                  onClick={() => increaseItemCount(item)}
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </div>
              <div class="mt-3 checkout-item-total-price">
                {getItemTotal(item.price, item.count)}
              </div>
            </div>
            <div class="col-1 mt-3">
              <a
                href="#"
                class="remove"
                title="Remove this item"
                onClick={() => removeFromCart(item)}
              >
                <i class="fa fa-remove"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  {
    decreaseItemCount,
    increaseItemCount,
    removeFromCart,
  }
)(CheckoutCart);
