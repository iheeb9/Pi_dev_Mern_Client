import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import {CanvasJSChart} from 'canvasjs-react-charts'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { ProgressBar } from 'react-bootstrap'
import axios from 'axios'
import { getsharedpost } from '../../redux/action/sharedpostAction'


export default function SharedprototypeDetail(props) {
	const{auth,sharedpost}=useSelector(state=>state)
	const id = props.match.params.id;
	const [state,setstate]=useState([])
	const [beststate,setbeststate]=useState([])
	const [progress,setprogress]=useState([])
	const detailsharedpost = sharedpost.posts.filter((sharedpost) => sharedpost._id === id)[0];
	const [postdetail,setpostdetail]=useState()
	const [data,setdata]=useState()
	const  [bestdata,setbestdata]=useState()
	const [WOW,SETWOW]=useState([])
	const [ANGRY,SETANGRY]=useState([])
	const [LOVE,SETLOVE]=useState([])
	const [LIKE,SETLIKE]=useState([])
	const [CARE,SETCARE]=useState([])
	const [SAD,SETSAD]=useState([])
	const [HAHA,SETHAHA]=useState([])
	const dispatch=useDispatch()
	useEffect(()=>{
		const tp=[]
		if (detailsharedpost){
			detailsharedpost.affect_frequencies.forEach(element => {
				setstate(element)
				
			})
			detailsharedpost.top_emotions.forEach(element => {
				console.log(element)
				tp.push(element[0])
				setprogress(element[1]*100)
			})
			setbeststate(tp)
		}
	},[sharedpost?.posts])
	useEffect(()=>{
		const wow=[]
		const angry=[]
		const love=[]
		const like=[]
		const care=[]
		const sad=[]
		const haha=[]
		if (detailsharedpost?.reaction){
			detailsharedpost?.reaction.map((rec)=>(
			rec=="WOW"&&wow.push(rec),
			rec=="ANGRY"&&angry.push(rec),
			rec=="LOVE"&&love.push(rec),
			rec=="LIKE"&&like.push(rec),
			rec=="CARE"&&care.push(rec),
			rec=="SAD"&&sad.push(rec),
			rec=="HAHA"&&haha.push(rec)
			
		
			))
			SETWOW(wow)
			SETANGRY(angry)
			SETLOVE(love)
			SETLIKE(like)
			SETCARE(care)
			SETSAD(sad)
			SETHAHA(haha)
		}

	},[detailsharedpost?.reaction])
	useEffect(()=>{
const a=[]
if (state.anger ){a.push({ y: state.anger*100, label: "anger" })}
if (state.anticip ){a.push({ y: state.anticip*100, label: "anticip" })}
if (state.anticipation ){a.push({ y: state.anticipation*100, label: "anticipation" })}
if (state.disgust ){a.push({ y: state.disgust*100, label: "disgust" })}
if (state.fear  ){a.push({ y: state.fear*100, label: "fear" })}
if (state.joy){a.push({ y: state.joy*100, label: "joy" })}
if (state.negative ){a.push({ y: state.negative*100, label: "negative" })}
if (state.positive ){a.push({ y: state.positive*100, label: "positive" })}
if (state.sadness ){a.push({ y: state.sadness*100, label: "sadness" })}
if (state.surprise){a.push({ y: state.surprise*100, label: "surprise" })}
if (state.trust){a.push({ y: state.trust*100, label: "trust" })}
if (state.length==0||progress==0){a.push({ y: 100, label: "Neutre" });}
		setdata({
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "People Reviews"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",	
				startAngle: -90,
					dataPoints: a
			}]
		})
	},[state,])
	console.log(detailsharedpost?.idreviw)
const update=async()=>{
	dispatch({type:'NOTIFY',payload:{warning:" Please Waiting for update..."}})
	if(detailsharedpost.idreviw)
	 axios.patch(`/python/modif/${detailsharedpost.idreviw}`)
          .then(
            res => {
              console.log(res);
            dispatch(getsharedpost(auth.token))
			dispatch({type:'NOTIFY',payload:{success:"your post was updating"}})
            },
            error => {
				dispatch({type:'NOTIFY',payload:{error:"Service indisponible try again"}})
            }
          );
      }; 

  return (<>      <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                  
      <li class="breadcrumb-item " style={{marginLeft:"175px"}}><Link to={'/annonce'}>annonce</Link></li>
      <li class="breadcrumb-item active " aria-current="page">userProfile</li>
  </ol>
  </nav>
 
    <section class="blog-single section" style={{textAlign:"start",marginTop:"0px"}}>
   
			<div class="container">
				<div class="row">
                <div class="col-lg-4 col-12">
						<div class="main-sidebar" style={{marginTop:"0px"}}>
                        <hr/>
						{detailsharedpost?.image.map((img)=>
						 <img src={img.url} alt="Picture by Daniel Lincoln" class="card__image"/>
						 )}
                        <hr/>    <hr/><hr/> <h6>Top emotion:</h6>
						{progress==0?null:beststate?.map((comm)=>(<p>{comm}</p>))}
						<ProgressBar variant="warning" now={progress} customLabel="Not there yet"/>
						<hr/>
						<hr/>
							<div class="single-widget recent-post">
								
								<h3 class="title">recent post</h3>
								<div class="single-post">
									<div class="image">
										<img src="/images/msi.png" alt="#"/>
									</div>
									<div class="content">
										<h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
										<ul class="comment">
											<li><i class="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2020</li>
											<li><i class="fa fa-commenting-o" aria-hidden="true"></i>35</li>
										</ul>
									</div>
								</div>
								<div class="single-post">
									<div class="image">
									<img src="/images/lenovo.jpg" alt="#"/>
									</div>
									<div class="content">
										<h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
										<ul class="comment">
											<li><i class="fa fa-calendar" aria-hidden="true"></i>Mar 05, 2019</li>
											<li><i class="fa fa-commenting-o" aria-hidden="true"></i>59</li>
										</ul>
									</div>
								</div>
								<div class="single-post">
									<div class="image">
									<img src="/images/asus.png" alt="#"/>
									</div>
									<div class="content">
										<h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
										<ul class="comment">
											<li><i class="fa fa-calendar" aria-hidden="true"></i>June 09, 2019</li>
											<li><i class="fa fa-commenting-o" aria-hidden="true"></i>44</li>
										</ul>
									</div>
								</div>
							</div>
						
							<div class="single-widget newsletter">
								<h3 class="title">Newslatter</h3>
								<div class="letter-inner">
									<h4>Subscribe & get news <br/> latest updates.</h4>
									<div class="form-inner">
										<input type="email" placeholder="Enter your email"/>
										<a href="#">Submit</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-8 col-12">
						<div class="blog-single-main">
							<div class="row">
							<a onClick={update}><i class="fa fa-refresh" aria-hidden="true" style={{fontSize:"2rem",color:"#F7941D",marginRight:"100p"}}></i>update</a>
								<div class="col-12">    <hr/>    <hr/>
                     <CanvasJSChart options = {data}/>
									<div class="blog-detail">
                                    <div class="blog-meta">
									<div   >
										<h6 >Reactions:</h6>
                                        <div className='d-flex' >
											{LIKE.length==0?null: <div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            <img src='/images/icon_fb/like.png' ></img>
                                            <p style={{fontSize:"15px",alignItems:"end"}} >{LIKE.length}</p>
                                            </div> }
											{LOVE.length==0?null: <div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            <img src='/images/icon_fb/love.png' ></img>
                                            <p >{LOVE.length}</p>
                                            </div> }
                                            
											{CARE.length==0?null:  <div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            <img src='/images/icon_fb/care.png' ></img>
                                            <p >{CARE.length}</p>
                                            </div>}
                                           
											{HAHA.length==0?null:  <div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            <img src='/images/icon_fb/haha.png' ></img>
                                            <p >{HAHA.length}</p>
                                            </div> }
                                          
                                            {WOW.length==0?null: <div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            <img src='/images/icon_fb/wow.png' ></img>
                                            <p >{WOW.length}</p>
                                            </div>}
                                            {SAD.length==0?null: <div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            <img src='/images/icon_fb/sad.png' ></img>
                                            <p >{SAD.length}</p>
                                            </div>}
                                            {ANGRY.length==0?null: <div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            <img src='/images/icon_fb/angry.png' ></img>
                                            <p >{ANGRY.length}</p>
                                            </div> }
                                            {ANGRY.length==0&&LIKE.length==0&&LOVE.length==0&&HAHA.length==0&&WOW.length==0&&SAD.length==0&&CARE.length==0&&<div className='d-flex mx-1' style={{alignItems:"end"}}>
                                            {/* <img src='/images/icon_fb/angry.png' ></img> */}
                                            <p >no reactions...</p>
                                            </div> }
                                            </div>
										</div>	
                                            <h2 class="blog-title">{detailsharedpost?.title}</h2>
                                            <span class="author">
                                        <a href="#"><i class="fa fa-calendar"></i>{detailsharedpost?.createdAt}</a></span>
                                            </div>
                                 
										<div class="content">
												<blockquote> <i class="fa fa-quote-left"></i> {detailsharedpost?.content}</blockquote>
												</div>
									</div>
									
								</div>
								
																
								<div class="product-area pt-35">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="li-product-tab">
                                <ul class="nav li-product-menu blog-meta d-flex d-flex justify-content-between">
                                   <li><a class="active" data-toggle="tab" href="#description"><span class="author"><a ><i class="fa fa-comments"></i>Best Comment ({detailsharedpost?.topreview.length})</a></span></a></li>
                                   <li><a  data-toggle="tab" href="#product-details"><span class="author"><a ><i class="fa fa-comments"></i>Bad Comment ({detailsharedpost?.badreview.length})</a></span></a></li>
                      
                                </ul>               
                            </div>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div id="description" class="tab-pane active show" role="tabpanel">
                          
									<div class="comments">
                            
										{detailsharedpost?.topreview.length==0?<p>No comments</p>:detailsharedpost?.topreview.map((comm)=>(
												<div class="single-comment" >
												<img src="https://icon-library.com/images/facebook-user-icon/facebook-user-icon-17.jpg" alt="#"/>
												<div class="content">
												 <h4>Facebook user <span>page...</span></h4> 
													<p>{comm}</p>
													
												</div>
											</div>
										))}
									
										
									</div>				
                        </div>
                        <div id="product-details" class="tab-pane" role="tabpanel">
                  
							<div class="col-12">
									<div class="comments">
                            
										{detailsharedpost?.badreview.length==0?<p>No comments</p>:detailsharedpost?.badreview.map((comm)=>(
												<div class="single-comment" >
												<img src="https://icon-library.com/images/facebook-user-icon/facebook-user-icon-17.jpg" alt="#"/>
												<div class="content">
												 <h4>Facebook user <span>page...</span></h4> 
													<p>{comm}</p>
													
												</div>
											</div>
										))}
									
										
									</div>									
								</div>	
                            
                        </div></div></div></div>			
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</section></>
  )
}
