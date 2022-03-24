import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Affiche from '../Home/Affiche'
import { logout } from '../../redux/action/authAction'

export default function Navbar() {
	const a = useHistory()
	const { auth } = useSelector(state => state)
	const dispatch = useDispatch()
	// const cartItems = this.state.cartItems;

	return (
		<div>

			<header class="header shop">

				<div class="topbar">
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-md-12 col-12">

								<div class="top-left">
									<ul class="list-main">
										<li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
										<li><i class="ti-email"></i> support@shophub.com</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-8 col-md-12 col-12">

								<div class="right-content">
									<ul class="list-main">
										<li><i class="ti-location-pin"></i> Store location</li>
										<li><i class="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
										<li><i class="ti-user"></i> <a href="#">My account</a></li>
										{auth.token ? <li><i class="ti-power-off"></i> <Link to="/"
											onClick={() => dispatch(logout())}>
											Logout
										</Link></li>
											: <li><i class="ti-power-off"></i><Link to={"register"}>Login </Link></li>}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="middle-inner">
					<div class="container">
						<div class="row">
							<div class="col-lg-2 col-md-2 col-12">

								<div class="logo">
									<Link to={"/"}> <img src="/images/logo.png" alt="logo" /> </Link>
								</div>
								<div class="search-top">
									<div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>

									<div class="search-top">
										<form class="search-form">
											<input type="text" placeholder="Search here..." name="search" />
											<button value="search" type="submit"><i class="ti-search"></i></button>
										</form>
									</div>
								</div>
								<div class="mobile-nav"></div>
							</div>
							<div class="col-lg-8 col-md-7 col-12">
								<div class="search-bar-top">

									<div class="search-bar">

										All category
										<form>

											<input name="search" placeholder="Search Products Here....." type="search" />
											<button class="btnn"><i class="ti-search"></i></button>
										</form>
									</div>
								</div>
							</div>

							<div class="col-lg-2 col-md-3 col-12">
								<div class="right-bar">
									<div class="sinlge-bar">
										<a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
									</div>
									<div class="sinlge-bar">
										<a href="#" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>

									</div>
									<div class="sinlge-bar shopping">
										<a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">2</span></a>

										<div class="shopping-item">
											<div class="dropdown-cart-header">
												<span>2 Items</span>
												<a href="shop">View Cart</a>
											</div>
											<ul class="shopping-list">
												<li>
													<a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
													<a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
													<h4><a href="#">Woman Ring</a></h4>
													<p class="quantity">1x - <span class="amount">$99.00</span></p>
												</li>
												<li>
													<a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
													<a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
													<h4><a href="#">Woman Necklace</a></h4>
													<p class="quantity">1x - <span class="amount">$35.00</span></p>
												</li>
											</ul>
											<div class="bottom">
												<div class="total">
													<span>Total</span>
													<span class="total-amount">$134.00</span>
												</div>
												<a href="checkout.html" class="btn animate">Checkout</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="header-inner">
					<div class="container">
						<div class="cat-nav-head">
							<div class="row">
								{a.location.pathname == "/" ? <div class="col-lg-3">
									<div class="all-category">
										<h3 class="cat-heading"><i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
										<ul class="main-category">
											<li><a href="#">New Arrivals <i class="fa fa-angle-right" aria-hidden="true"></i></a>
												<ul class="sub-category">
													<li><a href="#">accessories</a></li>
													<li><a href="#">best selling</a></li>
													<li><a href="#">top 100 offer</a></li>
													<li><a href="#">sunglass</a></li>
													<li><a href="#">watch</a></li>
													<li><a href="#">man’s product</a></li>
													<li><a href="#">ladies</a></li>
													<li><a href="#">westrn dress</a></li>
													<li><a href="#">denim </a></li>
												</ul>
											</li>
											<li class="main-mega"><a href="#">best selling <i class="fa fa-angle-right" aria-hidden="true"></i></a>
												<ul class="mega-menu">
													<li class="single-menu">
														<a href="#" class="title-link">Shop Kid's</a>
														<div class="image">
															<img src="images/2.jpg" alt="#" />
														</div>
														<div class="inner-link">
															<a href="#">Kids Toys</a>
															<a href="#">Kids Travel Car</a>
															<a href="#">Kids Color Shape</a>
															<a href="#">Kids Tent</a>
														</div>
													</li>
													<li class="single-menu">
														<a href="#" class="title-link">Shop Men's</a>
														<div class="image"><img src="images/3.jpg" alt="#" />
														</div>
														<div class="inner-link">
															<a href="#">Watch</a>
															<a href="#">T-shirt</a>
															<a href="#">Hoodies</a>
															<a href="#">Formal Pant</a>
														</div>
													</li>
													<li class="single-menu">
														<a href="#" class="title-link">Shop Women's</a>
														<div class="image"><img src="images/5.jpg" alt="#" />
														</div>
														<div class="inner-link">
															<a href="#">Ladies Shirt</a>
															<a href="#">Ladies Frog</a>
															<a href="#">Ladies Sun Glass</a>
															<a href="#">Ladies Watch</a>
														</div>
													</li>
												</ul>
											</li>
											<li><a href="#">accessories</a></li>
											<li><a href="#">top 100 offer</a></li>
											<li><a href="#">sunglass</a></li>
											<li><a href="#">watch</a></li>
											<li><a href="#">man’s product</a></li>
											<li><a href="#">ladies</a></li>
											<li><a href="#">westrn dress</a></li>
											<li><a href="#">denim </a></li>
										</ul>
									</div>
								</div> : null}
								<div class="col-lg-9 col-12">
									<div class="menu-area">
										<nav class="navbar navbar-expand-lg">
											<div class="navbar-collapse">
												<div class="nav-inner">
													<ul class="nav main-menu menu navbar-nav">
														<li class="active"><a href="#">Home</a></li>
														<li><a href="Shop">Shop</a></li>
														<li><a href="#">Service</a></li>

														<li><a href="#">Buy and Sell on Eshop<i class="ti-angle-down"></i></a>
															<ul class="dropdown">
																<li><a href="blog-single-sidebar.html">Buy Products</a></li>
																<li><a href="blog-single-sidebar.html">Sell product</a></li>
															</ul>
														</li>
														<li><a href="#">Auction<i class="ti-angle-down"></i><span class="new">$</span></a>
															<ul class="dropdown">
																<li><a href="/auction">Create Room</a></li>
																<li><a href="cart.html">Go bet</a></li>
															</ul>
														</li>
														<li><a href="#">Prototype<i class="ti-angle-down"></i><span class="new">New</span></a>
															<ul class="dropdown">
																<li><a href="shop-grid.html">share Prototype</a></li>
																<li><a href="cart.html">All your Prototype</a></li>
															</ul>
														</li>
														<li><a href="contact.html">Contact Us</a></li>
													</ul>
												</div>
											</div>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)

}
