import React from 'react'
import Notify from '../../Tools/notify';
import Navbar from '../../composants/Navbar/Navbar';
import Footer from '../../composants/Footer/footer';

export default function Annonce() {
  return (
      <div>

    <div style={{textAlign:"left"}}>
      <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                
    <li class="breadcrumb-item " style={{marginLeft:"175px"}}><a href="#">Home</a></li>
    <li class="breadcrumb-item active " aria-current="page">Annonce</li>
  </ol>
</nav>
            </div>
            <div class="li-main-blog-page pt-60 pb-55">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 order-lg-1 order-2">
                            <div class="li-blog-sidebar-wrapper">
                                <div class="li-blog-sidebar">
                                    <div class="li-sidebar-search-form">
                                        <form action="#">
                                            <input type="text" class="li-search-field" placeholder="search here"/>
                                            <button type="submit" class="li-search-btn"><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div class="li-blog-sidebar pt-25">
                                    <h4 class="li-blog-sidebar-title">Categories</h4>
                                    <ul class="li-blog-archive">
                                        <li><a href="#">Laptops (10)</a></li>
                                        <li><a href="#">TV & Audio (08)</a></li>
                                        <li><a href="#">reach (07)</a></li>
                                        <li><a href="#">Smartphone (14)</a></li>
                                        <li><a href="#">Cameras (10)</a></li>
                                        <li><a href="#">Headphone (06)</a></li>
                                    </ul>
                                </div>
                                <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Blog Archives</h4>
                                    <ul class="li-blog-archive">
                                        <li><a href="#">January (10)</a></li>
                                        <li><a href="#">February (08)</a></li>
                                        <li><a href="#">March (07)</a></li>
                                        <li><a href="#">April (14)</a></li>
                                        <li><a href="#">May (10)</a></li>
                                        <li><a href="#">June (06)</a></li>
                                    </ul>
                                </div>
                                <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Recent Post</h4>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details-left-sidebar.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details-left-sidebar.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details-left-sidebar.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Tags</h4>
                                    <ul class="li-blog-tags">
                                        <li><a href="#">Gaming</a></li>
                                        <li><a href="#">Chromebook</a></li>
                                        <li><a href="#">Refurbished</a></li>
                                        <li><a href="#">Touchscreen</a></li>
                                        <li><a href="#">Ultrabooks</a></li>
                                        <li><a href="#">Sound Cards</a></li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 order-lg-2 order-1">
                            <div class="row li-main-content">
                                <div class="col-lg-6 col-md-6">
                                    <div class="li-blog-single-item pb-25">
                                        <div class="li-blog-banner">
                                       
                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">    <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
    </div>
    <div class="carousel-item">    <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
    </div>
    <div class="carousel-item">    <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>      </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a href="blog-details-left-sidebar.html">blog image post</a></h3>
                                                <div class="li-blog-meta">
                                                    <a class="author" href="#"><i class="fa fa-user"></i>Admin</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i> 25 nov 2018</a>
                                                </div>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Cras pretium arcu ex.</p>
                                                <a class="read-more" href="blog-details-left-sidebar.html">Read More...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="li-blog-single-item pb-25">
                                        <div class="li-blog-banner">
                                            <a href="blog-details-left-sidebar.html"><img class="img-full" src="images/2.jpg" alt=""/></a>
                                        </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a href="blog-details-left-sidebar.html">blog image post</a></h3>
                                                <div class="li-blog-meta">
                                                    <a class="author" href="#"><i class="fa fa-user"></i>Admin</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i> 25 nov 2018</a>
                                                </div>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Cras pretium arcu ex.</p>
                                                <a class="read-more" href="blog-details-left-sidebar.html">Read More...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="li-blog-single-item pb-25">
                                        <div class="li-blog-banner">
                                            <a href="blog-details-left-sidebar.html"><img class="img-full" src="images/2.jpg" alt=""/></a>
                                        </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a href="blog-details-left-sidebar.html">blog image post</a></h3>
                                                <div class="li-blog-meta">
                                                    <a class="author" href="#"><i class="fa fa-user"></i>Admin</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i> 25 nov 2018</a>
                                                </div>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Cras pretium arcu ex.</p>
                                                <a class="read-more" href="blog-details-left-sidebar.html">Read More...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="li-blog-single-item pb-25">
                                        <div class="li-blog-banner">
                                            <a href="blog-details-left-sidebar.html"><img class="img-full" src="images/2.jpg" alt=""/></a>
                                        </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a href="blog-details-left-sidebar.html">blog image post</a></h3>
                                                <div class="li-blog-meta">
                                                    <a class="author" href="#"><i class="fa fa-user"></i>Admin</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i> 25 nov 2018</a>
                                                </div>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Cras pretium arcu ex.</p>
                                                <a class="read-more" href="blog-details-left-sidebar.html">Read More...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="li-blog-single-item pb-25">
                                        <div class="li-blog-banner">
                                            <a href="blog-details-left-sidebar.html"><img class="img-full" src="images/2.jpg" alt=""/></a>
                                        </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a href="blog-details-left-sidebar.html">blog image post</a></h3>
                                                <div class="li-blog-meta">
                                                    <a class="author" href="#"><i class="fa fa-user"></i>Admin</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i> 25 nov 2018</a>
                                                </div>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Cras pretium arcu ex.</p>
                                                <a class="read-more" href="blog-details-left-sidebar.html">Read More...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div class="col-lg-6 col-md-6">
                                    <div class="li-blog-single-item pb-25">
                                        <div class="li-blog-banner">
                                            <a href="blog-details-left-sidebar.html"><img class="img-full" src="images/2.jpg" alt=""/></a>
                                        </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a href="blog-details-left-sidebar.html">blog image post</a></h3>
                                                <div class="li-blog-meta">
                                                    <a class="author" href="#"><i class="fa fa-user"></i>Admin</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i> 25 nov 2018</a>
                                                </div>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Cras pretium arcu ex.</p>
                                                <a class="read-more" href="blog-details-left-sidebar.html">Read More...</a>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                                
                           
                                <div class="col-lg-12">
                                    <div class="li-paginatoin-area text-center pt-25">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <ul class="li-pagination-box">
                                                    <li><a class="Previous" href="#">Previous</a></li>
                                                    <li class="active"><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a class="Next" href="#">Next</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                
                            </div>
                        </div>
                    </div>
                </div>
  </div>
  </div>
 
  </div>
  )
}
