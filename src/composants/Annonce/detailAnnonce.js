import React from 'react'
import { useHistory } from 'react-router-dom';

export default function DetailAnnonce(props) {
    const id = props.match.params.id;
    const history=useHistory()

  return (
    <div>
       <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                
    <li class="breadcrumb-item " style={{marginLeft:"175px"}}><a href="#">Home</a></li>
    <li class="breadcrumb-item active " aria-current="page">userProfile</li>
  </ol>
</nav>
            </div>
       <div class="li-main-blog-page li-main-blog-details-page pt-60 pb-60 pb-sm-45 pb-xs-45 " style={{textAlign:"start"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 order-lg-1 order-2">
                            <div class="li-blog-sidebar-wrapper">
                            <div  >
                        <div class="card-container  ">
	<span class="pro">PRO</span>
	<img class="round" src="http://simpleicon.com/wp-content/uploads/user1.png" alt="user" style={{width:"130px  "}}/>
	<h3>Ricky Park</h3>
	<h6>New York</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
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
                                            <a href="blog-details.html">
                                                <img class="img-full" src="images/product/small-size/3.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details.html">
                                                <img class="img-full" src="images/product/small-size/2.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details.html">
                                                <img class="img-full" src="images/product/small-size/5.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details.html">First Blog Post</a></span>
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
                        <div class=" offset-1 col-lg-7 order-lg-2 order-1">
                            <div class="row li-main-content">
                                <div class="col-lg-12">
                                    <div class="li-blog-single-item pb-30">
                                        <div class="li-blog-banner" >
                                        <div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src="/images/2.jpg" /></div>
						  <div class="tab-pane" id="pic-2"><img src="/images/3.jpg" /></div>
						  <div class="tab-pane" id="pic-3"><img src="/images/5.jpg" /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs" style={{width:"300px   "}}>
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="/images/2.jpg" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="/images/3.jpg" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="/images/5.jpg" /></a></li>
						 	</ul>      </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a href="#">The Biggest Collection For Digital Product</a></h3>
                                                <div class="li-blog-meta">
                                                    <a class="author" href="#"><i class="fa fa-user"></i>Admin</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i> 25 nov 2018</a>
                                                </div>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Cras pretium arcu ex.</p>
                                                
                                                <div class="li-blog-blockquote">
                                                    <blockquote>
                                                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                                                    </blockquote>
                                                </div>
                                              
                                              <div class="li-tag-line">
                                                    <h4>tag:</h4>
                                                    <a href="#">Headphones</a>,
                                                    <a href="#">Video Games</a>,
                                                    <a href="#">Wireless Speakers</a>
                                                </div>
                                                <div class="li-blog-sharing text-center pt-30">
                                                    <h4>share this post:</h4>
                                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="li-comment-section">
                                        <h3>03 comment</h3>
                                        <ul>
                                            <li>
                                                <div class="author-avatar pt-15">
                                                    <img src="images/product-details/user.png" alt="User"/>
                                                </div>
                                                <div class="comment-body pl-15">
                                                        <span class="reply-btn pt-15 pt-xs-5"><a href="#">reply</a></span>
                                                    <h5 class="comment-author pt-15">admin</h5>
                                                    <div class="comment-post-date">
                                                        20 nov, 2018 at 9:30pm
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                                                </div>
                                            </li>
                                            <li class="comment-children">
                                                <div class="author-avatar pt-15">
                                                    <img src="images/product-details/admin.png" alt="Admin"/>
                                                </div>
                                                <div class="comment-body pl-15">
                                                        <span class="reply-btn pt-15 pt-xs-5"><a href="#">reply</a></span>
                                                    <h5 class="comment-author pt-15">admin</h5>
                                                    <div class="comment-post-date">
                                                        20 nov, 2018 at 9:30pm
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="author-avatar pt-15">
                                                    <img src="images/product-details/admin.png" alt="Admin"/>
                                                </div>
                                                <div class="comment-body pl-15">
                                                    <span class="reply-btn pt-15 pt-xs-5"><a href="#">reply</a></span>
                                                    <h5 class="comment-author pt-15">admin</h5>
                                                    <div class="comment-post-date">
                                                        20 nov, 2018 at 9:30pm
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
