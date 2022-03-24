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
      await axios.post(`/auction`, auction);
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
      <Paper elevation={24}>
        {/* Page title */}
        <Typography variant="h4">Post Ad</Typography>

        {/* Form */}
        <Box>
          <InputLabel>Product Name*</InputLabel>
          <TextField
            name="name"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            size="small"
          ></TextField>
        </Box>

        <Box>
          <InputLabel>Description*</InputLabel>
          <TextField
            name="description"
            multiline
            placeholder="Product description"
            onChange={(e) => setProductDescription(e.target.value)}
            size="small"
            rows={3}
          />
        </Box>

        <Box>
          <InputLabel>Base Price*</InputLabel>
          <TextField
            name="price"
            onChange={(e) => {
              setPrice(parseFloat(e.target.value));
            }}
            size="small"
            type="number"
            placeholder="Auction will start from this price point."
          ></TextField>
        </Box>

        <Box>
          <InputLabel>Start time*</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Basic example"
              value={startTime}
              onChange={(newValue) => {
                setStartTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              ampm={false}
            />
          </LocalizationProvider>
        </Box>

        <Box>
          <InputLabel>Start time*</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Basic example"
              value={endTime}
              onChange={(newValue) => {
                setEndTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              ampm={false}
            />
          </LocalizationProvider>
        </Box>
        <Button onClick={onSubmit}>Submit</Button>
      </Paper>
    </>
  );
}
