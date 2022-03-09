import React from 'react'
import { useSelector } from 'react-redux'

export default function Notfound() {
  return (
    <div>
        
       <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                
    <li class="breadcrumb-item " style={{marginLeft:"175px"}}><a href="#">Home</a></li>
    <li class="breadcrumb-item active " aria-current="page">Notfound</li>
  </ol>
</nav>
<div class="error404-area pt-30 pb-60">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="error-wrapper text-center ptb-50 pt-xs-20">
                    <div class="error-text">
                        <h1>404</h1>
                        <h2>Opps! PAGE NOT BE FOUND</h2>
                        <p>Sorry but the page you are looking for does not exist, have been removed, <br/> name changed or is temporarity unavailable.</p>
                    </div>
                    <div class="search-error">
                        <form id="search-form" action="#">
                            <input type="text" placeholder="Search"/>
                            <button><i class="zmdi zmdi-search"></i></button>
                        </form>
                    </div>
                    <div class="error-button">
                        <a href="index.html">Back to home page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
