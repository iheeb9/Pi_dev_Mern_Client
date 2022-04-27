import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductDetails, getProducts, UpdateProduct } from "../../../redux/action/productActions";

export default function UpProd(props) {
  const { allproductr } = useSelector((state) => state);
  
  const dispatch = useDispatch();
  const history = useHistory();
  const id = props.match.params.id;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category,setCategory]=useState([]);

  const updateproduct = allproductr.products.filter((p) => p._id === id)[0];

  useEffect(() => {

    if (updateproduct) {
      setImage(updateproduct.image);
      setName(updateproduct.name);
      setDescription(updateproduct.description);
      setPrice(updateproduct.price);
      setStock(updateproduct.countInStock);
      setCategory(updateproduct.category);

    }
   
  }, [allproductr.products]);
  

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

  const deleteImage = (index) => {
    const newArr = [...image];
    newArr.splice(index, 1);
    setImage(newArr);
  };

  const handleChangeImages = (e)  => {
    const files = [...e.target.files];
    let err = "";
    let newImages = [];
    files.forEach((file) => {
      if (!file) return (err = "Files does not exist.");
      // if (file.type !=='image/jpg '&& file.type !=='image/png'){
      //     return err="Image format is incorrect"
      // }
      return newImages.push(file);
    });
    if (err) {
      console.log(err);
    }
    setImage([...image, ...newImages]);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
      let product= {name:name,description:description,price:price,image:image,countInStock:stock,id:id,history:history,category:category}
    dispatch(UpdateProduct( product ,history));
  
  };

  return (
    <>
    
    <div >
    <section id="contact-us" class="contact-us section" >
    <div class="container">
    <div class="contact-head">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="form-main">
            <div class="title">
              <h4 style={{fontSize:"xx-large"}}>UpdateProduct</h4>
            </div>
            <form class="form" >
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="form-group">
                    <label> Name<span>*</span></label>
                    <input  
                     type="text"
                     value={name}
                     name="name"
                     onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                                            />
                  </div>
                </div>
                <div class="col-lg-6 col-12" >
    
                  <div class="form-group" >
                                            
                    <label>Categorie<span>*</span></label>
                    <select class="custom-select custom-select-lg mb-3" onChange={(e)=>setCategory(e.target.value)}>
                <option selected>{category}</option>
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
                    <input  
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     id="price"
                     placeholder="Price"
                   
                                            />
                  </div>	
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group">
                    <label>stock<span>*</span></label>
                    <input 
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      placeholder="Stock" 
                    id="stock"
                                            />
                  </div>	
                </div>
                <div class="col-12">
                  <div class="form-group message">
                    <label>Description<span>*</span></label>
                    <textarea  
                      type="text"
                      value={description}
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                    class="form-control"
                    id="Desc"
                    rows="3"
                                            ></textarea>
                  </div>
  <div className="d-flex">
                                 {image.map((img, index) => (
            <div key={index} style={{width:"30%" , height:"30%"}} id="file_img " className="mx-3" >
              <button
                onClick={() => deleteImage(index)}
                type="button"
                class="close"
                aria-label="Close"
                style={{ color: "#F7941D" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <img src={img.url?img.url:URL.createObjectURL(img)} alt="images" ></img>

              <hr></hr>
            </div>
          ))}
         

                </div></div>
                                    
                                    <div class="col-lg-6 col-12">
                                      
                 
                </div>
                                    <div class="col-lg-6 col-12">
              
                </div>
                                    <div class="col-lg-6 input_images" style={{position:"relative", display:"flex"}}>
                                        <div className='file_upload' style={{overflow:"hidden",margin:"0 10px",position:"relative"}} >
                                        <i className='fas fa-image' style={{fontSize:"2rem",cursor:"pointer",color:"#F7941D"}}/>
                                        <input   type="file"
              onChange={handleChangeImages}
              name="file"
              id="file"
                                         class="custom-file-input"
                                         
                                        multiple accept='image/*'style={{position:"absolute",top:"0",left:"0",opacity:"0",}} 
                                       />
                                        </div>
                                        
                </div>
                                   
                               
                             
                                    
                                    
                <div class="col-12">
                  <div class="form-group button">
                    <button type="button " class="btn float-right" onClick={(e) => handlesubmit(e)}>Update </button>
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
    </div>
    </>
  );
}
