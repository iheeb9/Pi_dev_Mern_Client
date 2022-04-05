import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createsharedpost } from '../../redux/action/sharedpostAction';

import { useHistory } from 'react-router-dom'
import { imageUpload } from '../../utils/uploadimage';

export default function Shareprototype() {
  const { auth } = useSelector(state => state)
  const history = useHistory()
  const [content, setcontent] = useState()
  const [resshare, setresshare] = useState()
  const [imageurl, setimageurl] = useState()
  const [title, settitle] = useState()
  const [media, setmedia] = useState()
  const [image, setimage] = useState()
  const dispatch = useDispatch()
  const [idpost, setidpost] = useState()
  const handleChangeImages = e => {
    const files = [...e.target.files]
    let err = ""
    let newImages = []

    files.forEach(file => {
      if (!file) return err = "Files does not exist."
      // if (file.type !=='image/jpg '&& file.type !=='image/png'){
      //     return err="Image format is incorrect"
      // }
      return newImages.push(file)
    })
    if (err) { dispatch({ type: 'NOTIFY', payload: { error: err } }) }
    setimage(newImages)
  }
  const postRandomQuote = () => {



    axios

      .post("https://graph.facebook.com/101154569214204/photos?", {
        url: imageurl,
        message: content,
        access_token:
          "EAAJwg69kZA28BADXvhyXaJUAZA6dmDEk2iT61SbOZC3StnBtZArb96ph1XLcZCZCgjBZAXfS0zUNL2eTU0rfG22u2naYzSxQYpMWtKrE1A3sFTjKGZAfTkJ4PS71zELmo4uk3p9q4sktb9hRplkucMvGiPhrpZBXVZBqS7T2bs1aYE2uiLfy6cquzA"
      })
      .then(
        res => {
          const result = res.data;
          console.log(result);
          setidpost(result.post_id)
          history.push('/allprototype')


        },
        error => {
          console.log(error);
        }
      );
  };
  const handlesend = async (e) => {
    e.preventDefault()
    let media = []

    if (!image) { dispatch({ type: 'NOTIFY', payload: { error: "select your image" } }) } else {
      dispatch({ type: 'NOTIFY', payload: { loading: true } })
      media = await imageUpload(image)
      setimageurl(media[0].url)
      setmedia(media)


    }
  }

  useEffect(() => {

    if (imageurl) {

      postRandomQuote()

    }

  }, [imageurl])

  useEffect(() => {

    if (idpost) {
      dispatch(createsharedpost({ title, content, media, auth, history, idpost }))

    }
  }, [idpost])
  return (<div>

    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb " >

        <li class="breadcrumb-item " style={{ marginLeft: "175px" }}><Link to={'/annonce'}>annonce</Link></li>
        <li class="breadcrumb-item active " aria-current="page">userProfile</li>
      </ol>
    </nav>
    <section id="contact-us" class="contact-us section">
      <div class="container">
        <div class="contact-head">
          <div class="row">
            <div class="col-lg-5 col-12">
              <div class="form-main">
                <div class="title">
                  <h4>Get in touch</h4>
                  <p style={{ textAlign: "start" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <hr />
                  <h3>Share your Product</h3>
                </div>
                <form class="form" method="post" onSubmit={handlesend} >
                  <div class="row">
                    <div class="col-lg-12 col-12">
                      <div class="form-group">
                        <label> title<span>*</span></label>
                        <input name="title" type="text" placeholder="your title here..."
                          onChange={(e) => { settitle(e.target.value) }} />
                      </div>
                    </div>
                    <div class="col-lg-12 col-12">
                      <div class="form-group">
                        <label> Content<span>*</span></label>
                        <textarea name="title" type="text" placeholder="your discription here..."
                          onChange={(e) => { setcontent(e.target.value) }} />
                      </div>
                    </div>






                    <div class="col-lg-6 col-12">

                    </div>
                    <div class="col-lg-6 input_images" style={{ position: "relative", display: "flex" }}>
                      <div className='file_upload' style={{ overflow: "hidden", margin: "0 10px", position: "relative" }} >
                        <i className='fas fa-image' style={{ fontSize: "2rem", cursor: "pointer", color: "#F7941D" }} />
                        <input type='file' name='file' id='file'
                          style={{ position: "absolute", top: "0", left: "0", opacity: "0", }}
                          onChange={handleChangeImages} />
                      </div>

                    </div>
                    <div class="col-lg-6 col-12">
                    </div>
                    <div class=" col-12">

                    </div >
                    <div className='col-12'>
                    </div>


                    <div class="col-12">
                      <div class="form-group button">
                        <button type="submit" class="btn " >Share protoype</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>



            <div class="col-md-6" id="protoype" style={{ width: "50px" }}>
              <div class="card" >
                <div class="d-flex justify-content-between p-2 px-3">
                  <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle" />
                    <div class="d-flex flex-column ml-2"> <span class="font-weight-bold">Jeanette Sun</span> <small class="text-primary">Collegues</small> </div>
                  </div>
                  <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">20 mins</small> <i class="fa fa-ellipsis-h"></i> </div>
                </div> {image ? <div>{image.map((img) => (
                  <img src={URL.createObjectURL(img)} class="img-fluid" style={{ maxHeight: "400px" }} />

                ))}</div> : <div><img src="https://ssr-releases-cdn.paperlesspost.com/_next/static/images/MobileMediaPoster-553a691ac40df070a04c82b601a117ec.jpg" class="img-fluid" alt='Post photo' style={{ maxHeight: "400px" }} /> </div>}
                <div class="p-2">
                  {content ? <p class="text-justify">{content}</p> :
                    <p class="text-justify">your Discription will display here</p>}
                  <hr />
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row icons d-flex align-items-center"> <i class="fa fa-heart"></i> <i class="fa fa-smile-o ml-2"></i> </div>
                    <div class="d-flex flex-row muted-color"> <span>2 comments</span> <span class="ml-2">Share</span> </div>
                  </div>
                  <hr />
                  <div class="comments">
                    <div class="d-flex flex-row mb-2"> <img src="https://i.imgur.com/9AZ2QX1.jpg" width="40" class="rounded-image" />
                      <div class="d-flex flex-column ml-2"> <span class="name">Facebook user</span> <small class="comment-text">Post and get comment's review ...</small>
                        <div class="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>18 mins</small> </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
