import axios from "axios";
import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'

export class AuctionDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      auctions: [],
    };
  }
  componentDidMount() {
    axios.get("/api/auction/available").then((res) => {
      console.log(res);

      this.setState({ auctions: res.data });
    });
  }

  render() {
    return (


      <div>
      <nav aria-label="breadcrumb ">
      <ol class="breadcrumb " >
                                      
          <li class="breadcrumb-item " style={{marginLeft:"175px"}}><Link to={'/annonce'}>annonce</Link></li>
          <li class="breadcrumb-item active " aria-current="page">userProfile</li>
      </ol>
      </nav>
      <div class="search-error">
                          <form id="search-form" action="#">
                              <input type="text" placeholder="Search"/>
                              <button><i class="zmdi zmdi-search"></i></button>
                          </form>
                      </div>
      <div id="protcard">
         <div class="container ">

         <ul className="autions row">
        {this.state.auctions.map((auction) => (
          <div className="col-lg-6">
            <Card style={{ width: "18rem" }}>
              {auction.product.images.map((img)=>
                <Card.Img src={img.url}></Card.Img>
              )}
               <Card.Body>
                <Card.Title>{auction.product.name}</Card.Title>
                <Card.Text>{auction.product.description}</Card.Text>
                <a
                  href={"/bid/" + auction._id}
                  variant="primary"
                  size="small"
                  type="btn"
                >
                  Go Bid
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </ul>
      
  </div>
  
      </div></div>






    );
  }
}
