import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { DeleteProduct, getProducts } from '../../../redux/action/productActions';
import Image from '../../Product/image';

export default function ListP() {
    const dispatch = useDispatch();
	const {allproductr}=useSelector(state => state)
  const history =useHistory();
  const delProdstate = useSelector(state =>state.DeleteProductReducer)
        console.log("consssttttt",allproductr)

       const deleteHandler = (id) => {
         if(window.confirm("Are you sure to delete this product ?")){
           dispatch(DeleteProduct(id))
           console.log("product delete",id)

         }
       } 

     useEffect(()=>{
        dispatch(getProducts());
        console.log("productadmin",allproductr )

	},[dispatch])  
  return (
    <div>
     <div>
       
 
     <table class="table col-md-8 ">
  <thead>
    <h3>Product List</h3>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">descrition</th>
      <th scope="col">Category</th>
      <th scope="col">Stock</th>

    </tr>
  </thead>
  <tbody>{allproductr.products && allproductr.products.map(product=>( /*   */
    <tr key={product._id}>
      <td>{product.name}</td>
      <td> {product.price}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td>{product.countInStock}</td>

      <td><button variant="danger" className='btn btn-danger mx-2' onClick={()=> deleteHandler(product._id)}>Delete</button></td>
     {/* <td><Link  title="Quick View" to={`/upp/${product._id}`}><i class=" ti-eye"></i><span>edit</span></Link></td>   */}

      <td><button className='btn btn-warning' onClick={()=> history.replace(`/upp/${product._id}`)}> Edit</button></td>

    </tr>
   )
)}   
  </tbody>
</table>    
</div>
<div id ="ca" style={{backgroundColor:"aliceblue", marginLeft:"6px"}}className='row'>
{allproductr.products && allproductr.products.map(product=>(
  <div class="col-md-3">
    {product.image.map((img,index)=>(
                 
            index==0&& <Image img={img} index={index}/>
              ))}
    <figure class="card card-product-grid card-lg"> <a href="#" class="img-wrap" data-abc="true"> <img src=""/> </a>
        <figcaption class="info-wrap">
            <div class="row">
                <div class="col-md-9 col-xs-9"> <a href="#" class="title" data-abc="true">{product.name}</a> <span class="rated"></span> </div>
             
            </div>
        </figcaption>
        <div class="bottom-wrap-payment">
            <figcaption class="info-wrap">
                <div class="row">
                    <div class="col-md-9 col-xs-9"> <a href="#" class="title" data-abc="true">${product.price}</a> <span class="rated"></span> </div>
                </div>
            </figcaption>
        </div>
        <div class="bottom-wrap" > <button className='btn btn-warning float-right' onClick={()=> history.replace(`/upp/${product._id}`)}> Edit</button>
            <div class="price-wrap"><button style={{backgroundColor:"red"}} variant="danger" className='btn btn-danger float-left mx-2' onClick={()=> deleteHandler(product._id)}>Delete</button> </div>
        </div>
    </figure>
</div>
))}
</div>

    </div>
  )
}
