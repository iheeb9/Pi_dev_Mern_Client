import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getsharedpost } from '../../redux/action/sharedpostAction'
import Shareprototype from './shareprototype'

export default function Allprototype() {
	const {sharedpost}=useSelector(state=>state)

  return (

    <div>
    <nav aria-label="breadcrumb ">
    <ol class="breadcrumb " >
                                    
        <li class="breadcrumb-item " style={{marginLeft:"175px"}}><Link to={'/annonce'}>annonce</Link></li>
        <li class="breadcrumb-item active " aria-current="page">userProfile</li>
    </ol>
    </nav>
    <div class="search-error">
                        <form id="search-form" action="#">
                            <input type="text" placeholder="Search"/>
                            <button><i class="zmdi zmdi-search"></i></button>
                        </form>
                    </div>
    <div id="protcard">
       <div class="container row">
   { sharedpost.loading?<ProgressBar animated now={50} striped variant="warning"  />:
    sharedpost.posts.map((post)=>(
		<div class="col-lg-3">
		<figure class="card__thumb">
			{post.image.map((img)=>(
					<img src={img.url} alt="Picture by Daniel Lincoln" class="card__image"/>
		
			))}
			<figcaption class="card__caption">
				<h2 class="card__title">{post.title}</h2>
				<p class="card__snippet">{post.content}</p>
				<a  class="card__button">		<Link to={`/sharedprototypedetail/${post._id}`} >Check details</Link></a>
			</figcaption>
		</figure>
	</div>
	))}
    
</div>

    </div></div>
  )
}
