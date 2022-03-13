import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/action/productActions';
import { Link } from 'react-router-dom';
import Listproduct from '../Product/listproduct';

export default function Allproduct() {

	const dispatch = useDispatch();
	const {    allproductr}=useSelector(state => state)

	useEffect(()=>{
		dispatch(getProducts());
	},[dispatch])
  return (
    <div>
		{allproductr.loading ? <h1>loading</h1> :(
  <section class="product-area shop-sidebar shop section">
  <div class="container">
	  <div class="row">
		  <div class="col-lg-3 col-md-4 col-12">
			  <div class="shop-sidebar">
					  <div class="single-widget category">
						  <h3 class="title">Categories</h3>
						  <ul class="categor-list">
							  <li><a href="#">T-shirts</a></li>
							  <li><a href="#">jacket</a></li>
							  <li><a href="#">jeans</a></li>
							  <li><a href="#">sweatshirts</a></li>
							  <li><a href="#">trousers</a></li>
							  <li><a href="#">kitwears</a></li>
							  <li><a href="#">accessories</a></li>
						  </ul>
					  </div>
					  <div class="single-widget range">
							  <h3 class="title">Shop by Price</h3>
							  <input type="range"/>
							  
						  </div>
					  <div class="single-widget recent-post">
						  <h3 class="title">Recent post</h3>
						  <div class="single-post first">
							  <div class="image">
								  <img src="https://via.placeholder.com/75x75" alt="#"/>
							  </div>
							  <div class="content">
								  <h5><a href="#">Girls Dress</a></h5>
								  <p class="price">$99.50</p>
								  <ul class="reviews">
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li><i class="ti-star"></i></li>
									  <li><i class="ti-star"></i></li>
								  </ul>
							  </div>
						  </div>
						  <div class="single-post first">
							  <div class="image">
								  <img src="https://via.placeholder.com/75x75" alt="#"/>
							  </div>
							  <div class="content">
								  <h5><a href="#">Women Clothings</a></h5>
								  <p class="price">$99.50</p>
								  <ul class="reviews">
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li><i class="ti-star"></i></li>
								  </ul>
							  </div>
						  </div>
						  <div class="single-post first">
							  <div class="image">
								  <img src="https://via.placeholder.com/75x75" alt="#"/>
							  </div>
							  <div class="content">
								  <h5><a href="#">Man Tshirt</a></h5>
								  <p class="price">$99.50</p>
								  <ul class="reviews">
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
									  <li class="yellow"><i class="ti-star"></i></li>
								  </ul>
							  </div>
						  </div>
					  </div>
					  <div class="single-widget category">
						  <h3 class="title">Manufacturers</h3>
						  <ul class="categor-list">
							  <li><a href="#">Forever</a></li>
							  <li><a href="#">giordano</a></li>
							  <li><a href="#">abercrombie</a></li>
							  <li><a href="#">ecko united</a></li>
							  <li><a href="#">zara</a></li>
						  </ul>
					  </div>
			  </div>
		  </div>
		  <div class="col-lg-9 col-md-8 col-12">
			  <div class="row">
				  <div class="col-12">
					  <div class="shop-top">
					  <div class="product-select-box">
						  
						  <div class="product-short">
							 
							  <select class="nice-select">
								  <option value="trending">SortedBy</option>
								  <option value="sales">Name (A - Z)</option>
								  <option value="sales">Name (Z - A)</option>
								  <option value="rating">Price (Low &gt; High)</option>
								  <option value="date">Rating (Lowest)</option>
								  <option value="price-asc">Model (A - Z)</option>
								  <option value="price-asc">Model (Z - A)</option>
							  </select>
							  
						  </div>
					  </div>
						  <ul class="view-mode">
							  <li class="active"><a href="shop-grid.html"><i class="fa fa-th-large"></i></a></li>
							  <li><a href="shop-list.html"><i class="fa fa-th-list"></i></a></li>
						  </ul>
					  </div>
				  </div>
			  </div>


			  
{/* liste produit  */}
			  <div class="row">
{allproductr.products && allproductr.products.map(product=>(
 <Listproduct key={product._id} product={product} />
)
)}
				  
				  
				  
				  

				  <div class="col-lg-4 col-md-6 col-12">
					  <div class="single-product">
						  <div class="product-img">
							  <a href="product-details.html">
								  <img class="default-img" src="https://via.placeholder.com/550x750" alt="#"/>
								  <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#"/>
							  </a>
							  <div class="button-head">
								  <div class="product-action">
									  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
									  <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
									  <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
								  </div>
								  <div class="product-action-2">
									  <a title="Add to cart" href="#">Add to cart</a>
								  </div>
							  </div>
						  </div>
						  <div class="product-content">
							  <h3><a href="product-details.html">Polo Dress For Women</a></h3>
							  <div class="product-price">
								  <span>$29.00</span>
							  </div>
						  </div>
					  </div>
				  </div>
				  <div class="col-lg-4 col-md-6 col-12">
					  <div class="single-product">
						  <div class="product-img">
							  <a href="product-details.html">
								  <img class="default-img" src="https://via.placeholder.com/550x750" alt="#"/>
								  <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#"/>
								  <span class="out-of-stock">Hot</span>
							  </a>
							  <div class="button-head">
								  <div class="product-action">
									  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
									  <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
									  <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
								  </div>
								  <div class="product-action-2">
									  <a title="Add to cart" href="#">Add to cart</a>
								  </div>
							  </div>
						  </div>
						  <div class="product-content">
							  <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
							  <div class="product-price">
								  <span class="old">$60.00</span>
								  <span>$50.00</span>
							  </div>
						  </div>
					  </div>
				  </div>
				  <div class="col-lg-4 col-md-6 col-12">
					  <div class="single-product">
						  <div class="product-img">
							  <a href="product-details.html">
								  <img class="default-img" src="https://via.placeholder.com/550x750" alt="#"/>
								  <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#"/>
								  <span class="new">New</span>
							  </a>
							  <div class="button-head">
								  <div class="product-action">
									  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
									  <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
									  <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
								  </div>
								  <div class="product-action-2">
									  <a title="Add to cart" href="#">Add to cart</a>
								  </div>
							  </div>
						  </div>
						  <div class="product-content">
							  <h3><a href="product-details.html">Women Pant Collectons</a></h3>
							  <div class="product-price">
								  <span>$29.00</span>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</section>
		)}
      
    </div>
  )
}
