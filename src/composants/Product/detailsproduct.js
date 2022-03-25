import React, { useEffect, useState } from 'react'
import { getProductDetails, getProducts } from '../../redux/action/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Image from './image';



 const Detailsproduct = (props) => {
	 const [product,setproduct]=useState()
	 const dispatch=useDispatch()
	useEffect(() => {
		dispatch(getProducts());
		
	  }, [dispatch]);
    const {allproductr}=useSelector(state => state)
    const [detailprod] =allproductr.products.filter((produit)=> produit._id==props.match.params.id)
       /*  const dispatch = useDispatch();
    const {productDetail}=useSelector(state => state)


     useEffect(()=>{
         console.log("deeeeeeetaaaill",productDetail)
         dispatch(getProductDetails(match.params.id))
     },[dispatch,match.params.id]) */
	 const isActive = index => {
		if(index === 0) return "active";
	}
  return (

    <div className="modal-body">
   
                            <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
					<div class="li-blog-single-item pb-30">
                        <div class="li-blog-banner" >
                        <div class="preview-pic tab-content">
                      {detailprod?.image.map((img,index)=>(
                          
      <div className={`tab-pane ${isActive(index)}`} id={`pic-${index}`}><img src={img.url} style={{maxHeight:"400px",minHeight:"400px",minWidth:"300px",maxWidth:"600px"}}/></div>
                      ))}
						</div>
						<ul class="preview-thumbnail nav nav-tabs" style={{width:"300px   "}}>
					
                        {detailprod?.image.map((img,index)=>(
                          
                          <li class={isActive(index)}><a data-target={`#pic-${index}`} data-toggle="tab"><img src={img.url} style={{maxHeight:"50px",minHeight:"50px",minWidth:"50px",maxWidth:"100"}}/></a></li>
						                  ))}
							</ul>      </div> </div>
				
					
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{detailprod?.name}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">{detailprod?.description}</p>
						<h4 class="price">current price: <span>${detailprod?.price}</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<button class="add-to-cart  orang" type="button">add to cart</button>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}


export default Detailsproduct