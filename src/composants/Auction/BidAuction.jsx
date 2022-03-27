import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";

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
   
          {/* Card component with props yPos,title,subtitle */}
          <Card
            yPos={48}
            title={"GEEKSFORGEEKS"}
            subtitle="Don't learn alone"
            edsfSEFE></Card>
         
        
      <div>
        <label>
        Price:
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

