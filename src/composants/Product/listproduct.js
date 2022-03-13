import React from 'react'
import { Link } from 'react-router-dom'

const listproduct = ({ product }) => {
  return (
    <div  class="col-lg-4 col-md-6 col-12">
    <div class="single-product">
      <div class="product-img">
          <a href="product-details.html">
              <img class="default-img" src={product.image} alt="#"/>
              <img class="hover-img" src="/images/3.jpg" alt="#"/>
          </a>
          <div class="button-head">
              <div class="product-action">
                  <Link  data-toggle="modal" data-target="#exampleModal" title="Quick View" to={`/allproduct/${product._id}`}><i class=" ti-eye"></i><span>Quick Shop</span></Link>
                  <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                  <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
              </div>
              <div class="product-action-2">
                  <a title="Add to cart" href="#">Add to cart</a>
              </div>
          </div>
      </div>
      <div class="product-content">
          <h3><Link to={`/allproduct/${product._id}`}>{product.name}</Link></h3>
          <div class="product-price">
              <span>${product.price}</span>
          </div>
      </div>
    </div>
    </div>
  )
}

export default listproduct