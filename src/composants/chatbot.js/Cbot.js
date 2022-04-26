import React, { Component } from 'react'
import axios from 'axios'

export default class  Cbot extends Component {
  state = {
      chat:[],
      message:''
  }

  handleChange = (e)=> {
      console.log("input change",e.target.value)
      this.setState({message:e.target.value})
  }
  handleSend =()=>{

    if(this.state.message==""){
            console.log("saisir votre messafe")
    }

      else{
            axios.post(' http://127.0.0.1:5000/predict',{'message':this.state.message})
           // .then(res=>console.log(res))
           .then(res=>{
               let ch= this.state.chat;
               ch.push({from:'Visitor',message:this.state.message})
               ch.push({from:'Aajib',message:res.data.answer})
            //console.log("recu",res.data.answer)

               this.setState({chat:ch,message:''});
               console.log("affichage",this.state)
           })
            .catch(err=>{
                console.log(err)
            })
         /*    let interval = window.setInterval(function(){
                var elem = document.getElementById('chatt');
                elem.scrollTop = elem.scrollHeight;
                window.clearInterval(interval)
            },1000)
            this.forceUpdate */
      }
  }
  render(){
     
    return (
        <>
       
            <div class="wwrapper">
        <div class="main">
        <div class="card-header">
       
                        <h6 class="card-title"><p>Chat With AJib</p></h6> 
                    </div>
                   
            <div class="px-2 scroll">
            {this.state.chat.map((message)=>{
                
                console.log("maping",message.message)

                            if(message.from =="Aajib"){
                               
                               return (  
                                <div class="d-flex align-items-center">
                                <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" class="img1" /></div>
                                <div class="pr-2 pl-1"> <span  class="name">{message.from}</span>
                                    <p class="msg" style={{backgroundColor:"lightblue"}}> {message.message}</p>
                                </div>
                            </div>)
                 
                                  
                                
                            }else{
                                return (  
                     <div class="d-flex align-items-center text-right justify-content-end ">
                    <div class="pr-2"> <span class="name">User</span>
                        <p class="msg"> {message.message}</p> </div>
                    <div>

                    {/* <img src="https://i.imgur.com/HpF4BFG.jpg" width="30" class="img1" />  */}
                </div>
                
                                </div>)
                            }
                            
                        })}
               
                        
               
            </div>
            <nav class="navbar bg-white navbar-expand-sm d-flex justify-content-between"> <input type="text"   name="message" onChange={(e)=>this.handleChange(e)} value={this.state.message}  class="form-control" placeholder="Type a message..."/>
                <div class="icondiv d-flex justify-content-end align-content-center text-center ml-2"> <i  onClick={()=>this.handleSend()} class="fa fa-arrow-circle-right icon2"></i>
           
                 </div>
            </nav>
            {/* <button class="primary" onClick={()=>this.handleSend()} >send   </button> */}
        </div>
     
        
    </div>
    
          
         
           </>
      )
    }
    
  }
 