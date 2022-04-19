import { useEffect, useState } from "react";


const crypto = require("crypto"); // crypto comes with Node.js

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
  return new Promise((res, rej) => {
    // Prevent time sync issue between client signature generation and zoom
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString(
      "base64"
    );
    const hash = crypto
      .createHmac("sha256", apiSecret)
      .update(msg)
      .digest("base64");
    const signature = Buffer.from(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");

    res(signature);
  });
}


var zoom;
var apiKey = "-OXo1PO7S8yz6JDcdjb0aQ";
var apiSecret = "ABUxYLd5NqJ6hfoYzgTq3Qg7Wsmbu3bgQ3Zj";
var meetingNumber = 91483015928
;
var leaveUrl = "http://localhost:3000"; // our redirect url
var userName = "esprit";
var userEmail = "esprit@gmail.com";
var passWord = "SYi26x";

var signature = "";
generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
  signature = res;
}); // need to generate based on meeting id - using - role by default 0 = javascript

const Zoom = () => {
  // loading zoom libraries before joining on component did mount
  useEffect(() => {
    const { ZoomMtg } = require("@zoomus/websdk");
    zoom = ZoomMtg;
    showZoomDIv();
    zoom.setZoomJSLib("https://source.zoom.us/1.9.0/lib", "/av");
    zoom.preLoadWasm();
    zoom.prepareJssdk();
    initiateMeeting();
  }, []);

  const showZoomDIv = () => {
    document.getElementById("zmmtg-root").style.display = "block";
  };

  const initiateMeeting = () => {
    zoom.init({
      leaveUrl: leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        zoom.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  return <div className="App">Zoom</div>;
};

export default Zoom;
