import React, { Component } from "react";
import Products from "./Products";
import Cart from "./Cart";
import data from "../data.json";
import axios from "axios";

export default class Shop extends Component {
  constructor() {
    super();

    this.state = {
      /// products:data.products,
      // products:data.products,
      cartItems: [],
      products: [],
    };
  }
  componentDidMount() {
    axios.get("/api/product/all").then((res) => {
      console.log(res);
      this.setState({ products: res.data.data });
    });
  }

  render() {
    return (
      <div>
        <Products products={this.state.products}></Products>
      </div>
    );
  }
}
