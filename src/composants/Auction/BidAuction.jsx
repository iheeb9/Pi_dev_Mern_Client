import { CardMedia } from "@mui/material";
import axios from "axios";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Card, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { CCol, CContainer, CRow, CAvatar } from "@coreui/react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Datetime from "react-datetime";
import { DatePicker } from "@mui/lab";
import moment from "moment";
import DetectionHand from "./DetectionHand";
var momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);

export function BidAuction(props) {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  const id = props.match.params.id;

  const [socket, setSocket] = useState(null);
  const [auction, setAuction] = useState(null);
  const [product, setProduct] = useState({});
  const [remainingTimeDuration, setRemainingTimeDuration] = useState(0);

  const [bidAmount, setBidAmount] = useState(null);

  useEffect(() => {
    setupSocket();
    fetchDetails();
  }, []);

  useEffect(() => {
    console.log(auction);
  }, [auction]);

  function setupSocket() {
    const newSocket = io(`http://${window.location.hostname}:7000`);
    newSocket.on("bid-placed", ({ auction }) => {
      setAuction(auction);
      setBidAmount(parseFloat(auction.currentPrice?.$numberDecimal) + 1);
    });
    setSocket(newSocket);
  }

  async function fetchDetails() {
    const result = await axios.get("/api/auction/" + id);
    setAuction(result.data);
    setProduct(result.data.product);
    setBidAmount(parseFloat(result.data.currentPrice?.$numberDecimal) + 1);

    // calculate remaining time
    const endTime = result.data.endTime;
    const remainingTime = moment.duration(moment(endTime).diff(moment()));
    setRemainingTimeDuration(remainingTime.asSeconds());
  }

  async function placeBid(amount) {
    const data = {
      auctionId: id,
      amount: amount ?? bidAmount,
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

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }

    return (
      <div className="timer">
        <div className="value">
          {moment.duration({ seconds: remainingTime }).format()}
        </div>
      </div>
    );
  };

  if (!auction) {
    return <>Loading</>;
  }

  return (
    <>
      {bidAmount ? (
        <DetectionHand placeBid={placeBid} bidAmount={bidAmount} />
      ) : null}
      <div class="row" style={{ width: "70%" }}>
        <div class="col-3">
          <Card style={{ width: "18rem" }}>
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
            ></h6>
            <hr />
            <div>
              <div class="d-flex justify-content-between">
                BasePrice:
                {auction.basePrice?.$numberDecimal}$
              </div>
              <div class="d-flex justify-content-between">
                CurrentPrice:
                {auction.currentPrice?.$numberDecimal}$
              </div>
            </div>
            <hr />

            <CountdownCircleTimer
              isPlaying
              duration={remainingTimeDuration}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[7, 5, 2, 0]}
            >
              {renderTime}
            </CountdownCircleTimer>
            <div class="row align-items-end">
              Ends at: {moment(auction.endTime).format("HH:mm:ss")}
            </div>
          </Card>
        </div>
        <div class="col-3">
          <Card style={{ height: "29rem", width: "18rem" }}>
            <CardMedia
              component="img"
              alt={auction.currentPrice?.$numberDecimal}
              image="https://greendealflow.com/wp-content/uploads/2020/11/header-bidding-auction-ss-1920_uusz3n-1120x630-1.gif"
            />

            <div>
              <label>Current price:</label>
              <div> {auction.currentPrice?.$numberDecimal}$</div>
              Bid Amount:
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(parseFloat(e.target.value))}
              />
              <div>
                <button
                  className="button primary animate"
                  onClick={placeBid}
                  style={{ marginTop: "30px" }}
                >
                  Place Bid
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-6">
          <Card style={{ height: "29rem" }}>
            <ul>
              {auction?.bids?.map((bid) => (
                // {moment(bid.time).format("HH:mm:ss")} {bid.user.fullname}
                // {bid.amount.$numberDecimal}
                <div class="checkout-item-row row mb-3">
                  <div class="col-2 m-0 p-0">
                    {moment(bid.time).format("HH:mm:ss")}
                  </div>
                  <div class="col-9 d-flex justify-content-between">
                    <div class="">{bid.user.fullname}</div>
                    <div class="">{bid.amount.$numberDecimal} $</div>
                  </div>
                </div>
              ))}
            </ul>
          </Card>
        </div>
      </div>
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
