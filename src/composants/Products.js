import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/action/cartActions";


 class Products extends Component {

	render() {
		return (

			<div>
				<div className="sidebar">
				</div>
				{!this.props.products ? (
					<div>Loading...</div>
				) : (
					<ul className="products">
						{this.props.products.map((product) => (
							<li key={product._id}>
								<div class="tab-content" id="myTabContent">
									<div class="tab-pane fade show active" id="man" role="tabpanel">
										<div class="tab-single">
											<div class="row">
												<div class="col-xl-3 col-lg-4 col-md-4 col-12">
													<div class="single-product">
														<div class="product-img">
															<a href="product-details.html">
																<span>{product.name}</span>
															
															</a>
															<div class="button-head">
																<div class="product-action">
																	<a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
																	<a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
																</div>
																<div class="product-action-2">
																	<button onClick={() => this.props.addToCart(product)}>Add to cart</button>
																</div>
															</div>
														</div>
														<div class="product-content">
															<div class="product-price">
																<span>${(product.price)}</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div></div>

							</li>
						))}
					</ul>
				)}



			</div>

		);
	}

}export default connect(
	(state) =>({}) ,
	{
	  addToCart,
	}
  )(Products);
  