
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "../../../redux/action/productActions";

export const AddProd = ({ history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setimages] = useState([]);
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
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

  const dispatch = useDispatch();

  const { productAddReducer } = useSelector((state) => state);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("categories", category);
    dispatch(AddProduct(name, description, images, stock, price, category));
    if ((!name, description)) return;
  };

  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = "";
    let newImages = [];

    files.forEach((file) => {
      if (!file) return (err = "Files does not exist.");
      if (file.type !== "image/jpg " && file.type !== "image/png"&& file.type !== "image/JPG"&& file.type !== "image/PNG") {
        return (err = "Image format is incorrect");
      }
      return newImages.push(file);
    });
    if (err) {
      console.log(err);
    }

    setimages([...images, ...newImages]);
  };
  return (<>
    <div   className="center col-md-7"style={{marginLeft:"200px" ,height:"200%" }} > 
    <br/>
 
      <div    style={{border:"solid yellow" ,backgroundColor:"white"}} class="container">
        {productAddReducer.loading && <div>aaaaa</div>}

        <h1 >Add Product</h1>
        <form    onSubmit={submitHandler}>
          <fieldset>
            <legend>formulaire </legend>

            <div class="form-group">
              <label for="nom"> Name </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="title"
                class="form-control col-md-4"
                placeholder="Product Name"
              />
            </div>

            <div class="form-group col-md-4">
              <label for="bio">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                class="form-control"
                id="Desc"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group row ">
              <label for="price">Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                class="form-control col-md-2"
                id="price"
                placeholder="Price"
              />
              <label for="stock">Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                class="form-control col-md-2"
                id="stock"
                placeholder="Stock"
              />
            </div>

            <div class="form-group col-md-4">
              <label for="selection">Select Categories</label>

              <select class="custom-select custom-select-lg mb-3" onChange={(e)=>setCategory(e.target.value)}>
                <option selected> select Category</option>
                {Categories.map((category) => (
                  <option key={category} 
                  value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div class="custom-file col-md-4">
              <input
                onChange={handleChangeImages}
                type="file"
                multiple
                accept="image/*"
                name="file"
                class="custom-file-input"
                id="customFile"
              />
              <label class="custom-file-label" for="customFile">
                Choose file
              </label>
            </div>
          </fieldset>
          <br />
          <div class="form-group"><label class="col-md-4 control-label"></label>
  <div class="col-md-4"><br/>
   <button id="12" style={{textTransform: "none" ,width:"50%"}}  type="submit" class="btn btn-warning" >Add <span class="glyphicon glyphicon-send"></span></button>
  </div>
 <br/>
 
</div> 
       
        </form>
      </div>
    </div>














<div>
<section id="contact-us" class="contact-us section">
<div class="container">
<div class="contact-head">
  <div class="row">
    <div class="col-lg-8 col-12">
      <div class="form-main">
        <div class="title">
          <h4>Get in touch</h4>
          <h3>Add New Product</h3>
        </div>
        <form class="form" method="post" onSubmit={submitHandler} >
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="form-group">
                <label> Name<span>*</span></label>
                <input  value={name}
                onChange={(e) => setName(e.target.value)}
                type="title"
                placeholder="Product Name"
                                        />
              </div>
            </div>
            <div class="col-lg-6 col-12" >

              <div class="form-group" >
                                        
                <label>Categorie<span>*</span></label>
                <select class="custom-select custom-select-lg mb-3" onChange={(e)=>setCategory(e.target.value)}>
                <option selected> select Category</option>
                {Categories.map((category) => (
                  <option key={category} 
                  value={category}>
                    {category}
                  </option>
                ))}
              </select>
                                         </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="form-group">
                <label>Your Price  <span>*</span></label>
                <input  value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                placeholder="Price"
                                        />
              </div>	
            </div>
            <div class="col-lg-6 col-12">
              <div class="form-group">
                <label>stock<span>*</span></label>
                <input  value={stock}
                onChange={(e) => setStock(e.target.value)}
                id="stock"
                placeholder="Stock"
                                        />
              </div>	
            </div>
            <div class="col-12">
              <div class="form-group message">
                <label>Description<span>*</span></label>
                <textarea  value={description}
                onChange={(e) => setDescription(e.target.value)}
                class="form-control"
                id="Desc"
                rows="3"
                                        ></textarea>
              </div>
                                    
            </div>
                                
                                <div class="col-lg-6 col-12">
             
            </div>
                                <div class="col-lg-6 col-12">
          
            </div>
                                <div class="col-lg-6 input_images" style={{position:"relative", display:"flex"}}>
                                    <div className='file_upload' style={{overflow:"hidden",margin:"0 10px",position:"relative"}} >
                                    <i className='fas fa-image' style={{fontSize:"2rem",cursor:"pointer",color:"#F7941D"}}/>
                                    <input  id='file'
                                     onChange={handleChangeImages}
                                     type="file"

                                     name="file"
                                     class="custom-file-input"
                                     
                                    multiple accept='image/*'style={{position:"absolute",top:"0",left:"0",opacity:"0",}} 
                                   />
                                    </div>
                                    
            </div>
                               
                           
                         
                                
                                
            <div class="col-12">
              <div class="form-group button">
                <button type="submit " class="btn float-right ">Add Product </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  
  </div>
</div>
</div>
</section>
</div></>
  );
};
