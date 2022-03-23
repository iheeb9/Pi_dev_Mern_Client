 import { render } from '@testing-library/react';
import { Button } from 'bootstrap';
import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCategory, getAllCategory } from '../../../redux/action/catAction';

export default function Addcat( ) {


   const [categoryName,  setCategoryName] = useState('');
   const [parentCategoryId, setParentCategoryId] =useState('')
   


   const dispatch =useDispatch();
   const category = useSelector(state => state.CategoryReducer)
 
    useEffect(()=>{
     dispatch(getAllCategory());
    },[dispatch])

    const SendHandle = (e)=>{
        e.preventDefault();
        console.log("name",categoryName)
        console.log("parentId",parentCategoryId)

     
        dispatch(AddCategory(categoryName,parentCategoryId))
        /* const cat = {
            categoryName,
            parentCategoryId
        } */
       // console.log(cat)
    }


 


    const renderCategories = (categ) => {
            let myCategories = [] ;
            for (let category of categ) {
                myCategories.push(
                    <li key={category.name} >
                        {category.name}
                        {category.children.length > 0? (<ul>
                            {renderCategories(category.children)}
                        </ul>) :null }
                    </li>
                )
            }
            return myCategories; 
    }


    const createCategoryList =  (categories,options = []) => {
        for ( let category of categories) {
            options.push({value:category._id, name:category.name})
            if(category.children.length>0 ){
                createCategoryList(category.children,options)
            }
        }
        //console.log("3fas",options)
        //console.log("find",category.categories)
        return options;
        
    }


  return (
      <div>
           <div className='col-md-12'>   

                 <div style={{display:'flex', justifyContent:'space-between'}}>
                     <h3>Category</h3>   
                     <button>Add</button> 
                 </div>
            </div>
        <div>
            <div className='col-md-12'>
                <ul >
                  { renderCategories(category.categories)}
                    
                </ul>
            </div> 
      
<form onSubmit={SendHandle}  >
  <div className="form-group col-md-4">
    <label for="formGroupExampleInput">Add Category</label>
    <input 
    value={categoryName}
    onChange={(e)=>setCategoryName(e.target.value)}
    type="text" 
    className="form-control"
     id="formGroupExampleInput"
      placeholder="Example input"/>
  </div>


<select className='form-control col-md-4'
value={parentCategoryId}
onChange={(e)=>setParentCategoryId(e.target.value)}>
   
    {
        createCategoryList(category.categories).map(option=> 
        
            <option key={option.value} value={option.value}>{option.name}</option>
        )
        
    }
</select>

 
  <button type="submit"   class="btn btn-primary mb-2">Add</button>

</form>

        </div>
      
    </div>
   
  )
}


