import { useState } from "react";

import {
  Box,
  Paper,
  TextField,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Form, FormControl, InputGroup } from "react-bootstrap";

export function AddAuction() {
  const dispatch = useDispatch();

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState(0.0);

  async function onSubmit() {
    // construct the request body
    const auction = {
      product: {
        name: productName,
        description: productDescription,
        price,
      },
      startTime,
      endTime,
    };

    try {
      // send body to backend
      await axios.post(`/api/auction`, auction);
      // show success/error message
      dispatch({
        type: "NOTIFY",
        payload: { success: "Auction added successfully!" },
      });
    } catch (err) {
      dispatch({
        type: "NOTIFY",
        payload: { error: "Failed to add auction!" },
      });
    }
  }

  function handleFormChange(e) {
    console.log("Text field changed", e.target.value);
  }

  return (
    <>
      <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="top-left">
                <ul class="list-main">
                  <li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
                  <li><i class="ti-email"></i> support@shophub.com</li>
                  <li><i class="ti-email"></i> support@shophub.com</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>





      <form id="monForm">
     <div>
       <div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="form-group">
                <label>
                  Nom :
                </label>

                  <input type="text" onChange={(e) => {
                    setProductName(e.target.value);
                  }} />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="form-group">
                <label>
                  Price :
               </label>

                  <input type="text" onChange={(e) => {
                    setPrice(parseFloat(e.target.value));
                  }} />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="form-group">
                <label>
                  Note :
                </label>

                  <input type="text" onChange={(e) => setProductDescription(e.target.value)}
                  />
              </div></div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="form-group">

                <InputLabel>Start time</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    value={startTime}
                    onChange={(newValue) => {
                      setStartTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    ampm={false}
                  />
                </LocalizationProvider>

              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="form-group">
                <InputLabel>Start End</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    value={endTime}
                    onChange={(newValue) => {
                      setEndTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    ampm={false}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>

        <Button className="button primary animate" onClick={onSubmit}>Confirmation</Button>
      </form>

    </>
  );
}
