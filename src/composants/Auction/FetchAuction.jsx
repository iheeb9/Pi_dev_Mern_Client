import axios from "axios";
import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export class FetchAuction extends React.Component {
    constructor() {
       
            super();

        this.state = {
            auctions: [],

        }

    }
    componentDidMount() {
        axios.get('/auction/available').then(res => {
            console.log(res);

            this.setState({ auctions: res.data });

        });
    }

 
  





    render() {
        return (
            <ul className="autions">
                {this.state.auctions.map((auction) => (
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src="https://media.istockphoto.com/photos/gavel-on-auction-word-picture-id917901978?k=20&m=917901978&s=612x612&w=0&h=NULGu8-bVpy28gbW6AZbZlEVra-Q4s2rg607emPfkCs="></Card.Img>
                            <Card.Body>
                                <Card.Title>{auction.product.name}</Card.Title>
                                <Card.Text>
                                    {auction.product.description}
                                </Card.Text>
                                <a href={"/bid/" +auction._id }variant="primary" size="small" type="btn">Go Bid</a>
                            </Card.Body>
                        </Card>

                    </div>


                ))}
            </ul>
        )
    }

}

