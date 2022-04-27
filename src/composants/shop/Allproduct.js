import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductpage, getProducts } from "../../redux/action/productActions";
import { Link } from "react-router-dom";
import Listproduct from "../Product/listproduct";
import detailsproduct from "../Product/detailsproduct";
import Pagination from "react-js-pagination";

import  Slider from 'rc-slider'
import'rc-slider/assets/index.css';

export default function Allproduct({ match }) {
  const { productReducerPage } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState();
  const resPerPage = productReducerPage.resPerPage;

  
 const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  const [price,setPrice] =useState ([1,5000])
  //console.log("setprice",price)

  //console.log("ress", resPerPage);
  //console.log("pcccccc", resPerPage);

  const dispatch = useDispatch();
  //console.log("crrentpage",currentPage)

  const [category, setCategory] = useState("");
  const Categories = [
    "Electronics",
    "Cameras",
    "Laptop",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Other",
  ];

  {
    /* search product with name */
  }
  const keyword = match.params.keyword;
  //console.log("keywooooorrrddd",keyword)
  const productCount = productReducerPage.productCount;

  useEffect(() => {
    dispatch(getproductpage(keyword,currentPage, category,price));
   dispatch(getProducts());
    //console.log("priceli yetb3ath",price)
  }, [dispatch, keyword,currentPage, category,price]);

  function setCurrentpageNo(PageNumber) {
    setCurrentPage(PageNumber);
  }
  // console.log("price",price)
  return (
    <div>
      {productReducerPage.loading ? (
        <h1>loading</h1>
      ) : (
        <section class="product-area shop-sidebar shop section">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-12">
                <div class="shop-sidebar">
                  <div class="single-widget category">
                    <h3 class="title">Categories</h3>
                    <ul class="categor-list">
                      {Categories.map((category) => (
                        <ol
                          style={{
                            cursor: "pointer",
                            listStyleType: "node",
                          }}
                          key={category}
                          onClick={() => setCategory(category)}
                        >
                          {category}
                        </ol>
                      ))}
                    </ul>
                  </div>
                  <div class="single-widget ">
                    <h3 class="title">Shop by Price</h3>


<div className="px-8">
                        <Range
                            marks={{
                              1:`$1`,
                              5000:`$5000`
                            }}
                            min={1}
                            max={5000}
                            defaultValue={[1,5000]}
                            tipFormatter={value => `$${value}`}
                            tipProps={{
                              palcement :"top",
                              visible:true
                            }}
                            value={price}
                            onChange={(price) =>setPrice(price)}
                        />
                        
                      </div>



                      
                    {/*  <input type="range"/>   */}
                  </div>
                  <div class="single-widget recent-post">
                    <h3 class="title">Recent post</h3>
                    <div class="single-post first">
                      <div class="image">
                        <img src="https://via.placeholder.com/75x75" alt="#" />
                      </div>
                      <div class="content">
                        <h5>
                          <a href="#">Girls Dress</a>
                        </h5>
                        <p class="price">$99.50</p>
                        <ul class="reviews">
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li>
                            <i class="ti-star"></i>
                          </li>
                          <li>
                            <i class="ti-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-post first">
                      <div class="image">
                        <img src="https://via.placeholder.com/75x75" alt="#" />
                      </div>
                      <div class="content">
                        <h5>
                          <a href="#">Women Clothings</a>
                        </h5>
                        <p class="price">$99.50</p>
                        <ul class="reviews">
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li>
                            <i class="ti-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-post first">
                      <div class="image">
                        <img src="https://via.placeholder.com/75x75" alt="#" />
                      </div>
                      <div class="content">
                        <h5>
                          <a href="#">Man Tshirt</a>
                        </h5>
                        <p class="price">$99.50</p>
                        <ul class="reviews">
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                          <li class="yellow">
                            <i class="ti-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="single-widget category">
                    <h3 class="title">Manufacturers</h3>
                    <ul class="categor-list">
                      <li>
                        <a href="#">Forever</a>
                      </li>
                      <li>
                        <a href="#">giordano</a>
                      </li>
                      <li>
                        <a href="#">abercrombie</a>
                      </li>
                      <li>
                        <a href="#">ecko united</a>
                      </li>
                      <li>
                        <a href="#">zara</a>
                      </li>
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
                            <option value="rating">
                              Price (Low &gt; High)
                            </option>
                            <option value="date">Rating (Lowest)</option>
                            <option value="price-asc">Model (A - Z)</option>
                            <option value="price-asc">Model (Z - A)</option>
                          </select>
                        </div>
                      </div>
                      <ul class="view-mode">
                        <li class="active">
                          <a href="shop-grid.html">
                            <i class="fa fa-th-large"></i>
                          </a>
                        </li>
                        <li>
                          <a href="shop-list.html">
                            <i class="fa fa-th-list"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* liste produit  */}
                <div class="row">
                  {productReducerPage.products &&
                    productReducerPage.products.map((product) => (
                      <Listproduct key={product._id} product={product} />
                    ))}

                 
              
                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="https://via.placeholder.com/550x750"
                            alt="#"
                          />
                          <img
                            class="hover-img"
                            src="https://via.placeholder.com/550x750"
                            alt="#"
                          />
                          <span class="new">New</span>
                        </a>
                        <div class="button-head">
                          <div class="product-action">
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              href="#"
                            >
                              <i class=" ti-eye"></i>
                              <span>Quick Shop</span>
                            </a>
                            <a title="Wishlist" href="#">
                              <i class=" ti-heart "></i>
                              <span>Add to Wishlist</span>
                            </a>
                            <a title="Compare" href="#">
                              <i class="ti-bar-chart-alt"></i>
                              <span>Add to Compare</span>
                            </a>
                          </div>
                          <div class="product-action-2">
                            <a title="Add to cart" href="#">
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="product-content">
                        <h3>
                          <a href="product-details.html">
                            Women Pant Collectons
                          </a>
                        </h3>
                        <div class="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                      
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resPerPage}
                      totalItemsCount={productCount}
                      onChange={setCurrentpageNo}
                      nextPageText={"Next"}
                      prevPageText={"Prev"}
                      firstPageText={"First"}
                      lastPageText={"Last"}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
