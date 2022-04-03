import { CardMedia } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { CCol, CContainer, CRow, CAvatar } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import DateTimePicker from "@mui/lab/DateTimePicker";

export function BidAuction(props) {
  const id = props.match.params.id;

  const [auction, setAuction] = useState({});
  const [product, setProduct] = useState({});

  const [bidAmount, setBidAmount] = useState(0);

  useEffect(() => {
    fetchDetails();
  }, []);

  async function fetchDetails() {
    const result = await axios.get("/api/auction/" + id);
    setAuction(result.data);
    setProduct(result.data.product);
    setBidAmount(parseFloat(result.data.currentPrice?.$numberDecimal) + 1);
  }

  async function placeBid() {
    const data = {
      auctionId: id,
      amount: bidAmount,
    };

    const result = await axios.post(
      "/api/auction/bid/place",
      data,
      getAuthRequestHeaders()
    );
    if (result) {
      console.log("Bid successfully placed");
    }
  }

  if (!auction) {
    return <>Loading</>;
  }

  return (
    <>

      <CAvatar src="https://img1.freepng.fr/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" status="success" />
      <CAvatar color="secondary" status="danger">CUI</CAvatar>
      <Card style={{ width: "18rem" }}>
        <CardMedia
          component="img"
          alt={auction.currentPrice?.$numberDecimal}
          height="140"
          image="https://greendealflow.com/wp-content/uploads/2020/11/header-bidding-auction-ss-1920_uusz3n-1120x630-1.gif"
        />

        <div>
          <label>
            CurrentPrice:
          </label>
          <div> {auction.currentPrice?.$numberDecimal}</div>

          Bid Amount:
          <input
            type="namber"
            value={bidAmount}
            onChange={(e) => setBidAmount(parseFloat(e.target.value))}
          />

          <div>
            <button className="button primary animate" onClick={placeBid}>Place Bid</button>
          </div>
        </div>
      </Card>

      <Card style={{ width: "18rem" }}>

        <div
          class="single-head"
          style={{
            padding: "2em",
          }}
        >
          <div class="row single-info mb-0">
            <div class="col-3">
              <i class="fa fa-shopping-basket"></i>
            </div>
            <div class="col-9" style={{ paddingTop: ".5em" }}>
              <h4 class="title"> Details</h4>
            </div>
          </div>
          <h6
            style={{
              fontSize: "10px",
              textAlign: "left",
              margin: "0px",
              color: "#757575",
            }}
          >

          </h6>
          <hr />
          <div>
            <div class="d-flex justify-content-between">
              BasePrice:
              {auction.basePrice?.$numberDecimal}
            </div>
            <div class="d-flex justify-content-between">
              CurrentPrice:
              {auction.currentPrice?.$numberDecimal}            </div>
          </div>
          <hr />
        
          <div class="row align-items-end">{auction.endTime}</div>
        </div>
      </Card>

    </>
  );
}

export function getAuthRequestHeaders() {
  const { auth } = store.getState();
  return { headers: { Authorization: auth.token } };
}

// {
//   _id: "623cc44fc5921c2a63e35802",
//   product: {
//     _id: "623cc44fc5921c2a63e35800",
//     name: "cheima",
//     description: "gdfgfdgfd",
//     price: 54,
//     __v: 0,
//   },
//   basePrice: { $numberDecimal: "54" },
//   currentPrice: { $numberDecimal: "54" },
//   startTime: "2022-03-24T19:10:22.802Z",
//   endTime: "2022-03-25T16:30:22.000Z",
//   auctionStarted: false,
//   auctionEnded: false,
//   sold: false,
//   bids: [],
//   createdAt: "2022-03-24T19:19:43.084Z",
//   updatedAt: "2022-03-24T19:19:43.084Z",
//   __v: 0,
// };

// {
//   "auctionId": "623a3aa9c233303441dfd0d4",
//   "amount": 100.1
// }

