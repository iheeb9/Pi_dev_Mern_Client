import React from "react";
import { Link } from "react-router-dom";
import Image from "./image";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/cartActions";

const listproduct = ({ product, addToCart }) => {
  return (
    <div
      className=" row col-lg-4 col-md-6 col-12 bord "
      style={{ marginLeft: "2px", marginTop: "15px" }}
    >
      <div class="single-product">
        <div class="product-img">
          <a href="product-details.html">
            {product.image.map((img, index) => (
              <Image img={img} index={index} />
              /* <img class="default-img" src={img.url} alt="#"/>*/
            ))}
          </a>
          <div class="button-head">
            <div class="product-action">
              <Link title="Quick View" to={`/detailp/${product._id}`}>
                <i class=" ti-eye"></i>
                <span>Quick Shop</span>
              </Link>
              <a title="Wishlist" href="#">
                <i class=" ti-heart "></i>
                <span>Add to Wishlist</span>
              </a>
            </div>
            <div class="product-action-2">
              <a
                title="Add to cart"
                href="#"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="product-content">
          <h3>
            <Link to={`/allproduct/${product._id}`}>{product.name}</Link>
          </h3>
          <div class="product-price">
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({}), {
  addToCart,
})(listproduct);
