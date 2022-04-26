import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { deleteUser,MakeAdmin } from '../../../redux/action/userAction';
import Image from '../../Product/image';

export default function ListP() {
    const dispatch = useDispatch();
	const {user}=useSelector(state => state)
  const {auth}=useSelector(state => state)
  const history =useHistory();
  const delProdstate = useSelector(state =>state.DeleteProductReducer)
    
       const deleteHandler = (id) => {
         if(window.confirm("Are you sure to delete this User ?")){
          console.log(id)
           dispatch(deleteUser(id,auth))

         }
       } 
       const updateHandler = (id) => {
        if(window.confirm("Are you sure to delete this User ?")){
         console.log(id)
          dispatch(MakeAdmin(id,auth))
          console.log("User Updated",id)
        }
      } 

     useEffect(()=>{
	},[dispatch])  
  return (
    <div>
     <div>
       
 
     <table class="table col-md-8 ">
  <thead>
    <h3>Product List</h3>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">fullname</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">mobile</th>
      <th scope="col">gender</th>
      <th scope="col">role</th>
      

    </tr>
  </thead>
  <tbody>{user.users && user.users.map(user=>( /*   */
    <tr key={user._id}>
        <td><img class="round" src={user.images} alt="user" style={{width:"80px  ",height:"80px"}}/>
   </td>
      <td>{user.fullname}</td>
    
     
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.gender}</td>
      <td>{user.role}</td>
      <td><button variant="danger" className='btn btn-danger mx-2' onClick={()=> deleteHandler(user._id)}>Delete</button></td>
  
{
  user.role==='user'?<td><button className='btn btn-warning' onClick={()=> updateHandler(user._id)}> Make Admin</button></td>:<td><button className='btn btn-warning' disabled onClick={()=> updateHandler(user._id)}> Make Admin</button></td>
} 
      

    </tr>
   )
)}   
  </tbody>
</table>    
</div>

</div>

  
  )
}
