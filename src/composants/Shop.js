import React, { Component } from "react";
import Products from "./Products";
import data from "../data.json"
import Cart from "./Cart";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };

  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x._id !== product._id),
    });

  }

  addToCart = (product) => {
 
      const cartItems = this.state.cartItems.slice();
      let alreadyExists = false;
      cartItems.forEach((x) => {
        if (x._id === product._id) {
          alreadyExists = true;
          x.count++;
        }
      });
      if (!alreadyExists) {
        cartItems.push({ ...product, count: 1 });
      }   
      this.setState({ cartItems })   
    }
   

  render() {
    return (
      <div>
        <div><Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}></Cart></div>
        <Products products={this.state.products} addToCart={this.addToCart}></Products>
      </div>
    );
  }
}
