import React, { Component } from "react";
import Products from "./Products";
import Cart from "./Cart";
import data from "../data.json";
export default class Shop extends Component {

  constructor(){
    super();
    this.state={
      products:data.products,

    }
  }
  render() {
    return (
    
      <div>
        <div><Cart ></Cart></div>
        <Products products={this.state.products} ></Products>
      </div>
 
       );
  }
}
