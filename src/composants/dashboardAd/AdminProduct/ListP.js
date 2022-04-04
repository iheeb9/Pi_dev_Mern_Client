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
      <th scope="col">Image</th>
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
      <td style={{width:"20px",height:"20px"}}>   {product.image.map((img,index)=>(
                 
                 index==0&& <Image img={img} index={index} />
                   ))}</td>


      <td><button variant="danger" className='btn btn-danger mx-2' onClick={()=> deleteHandler(product._id)}>Delete</button></td>
     {/* <td><Link  title="Quick View" to={`/upp/${product._id}`}><i class=" ti-eye"></i><span>edit</span></Link></td>   */}

      <td><button className='btn btn-warning' onClick={()=> history.replace(`/upp/${product._id}`)}> Edit</button></td>

    </tr>
   )
)}   
  </tbody>
</table>    
</div>


    </div>
  )
}
