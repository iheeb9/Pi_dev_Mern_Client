import React, { Component } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "../../App.css";
import { drawHand } from "../../utilities";
import { bid } from "./BidHand";
import * as fp from "fingerpose";
import victory from "../../victory.png";
import thumbs_up from "../../thumbs_up.png";

class DetectionHand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webcamRef: React.createRef(null),
      canvasRef: React.createRef(null),
      images: { thumbs_up: thumbs_up, victory: victory },
    };
  }

  componentDidMount() {
    this.runHandpose();
  }

  runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      this.detect(net);
    }, 300);
  };

  detect = async (net) => {
    if (
      typeof this.state.webcamRef.current !== "undefined" &&
      this.state.webcamRef.current !== null &&
      this.state.webcamRef.current.video.readyState === 4
    ) {
      const video = this.state.webcamRef.current.video;
      const videoWidth = this.state.webcamRef.current.video.videoWidth;
      const videoHeight = this.state.webcamRef.current.video.videoHeight;

      this.state.webcamRef.current.video.width = videoWidth;
      this.state.webcamRef.current.video.height = videoHeight;

      this.state.canvasRef.current.width = videoWidth;
      this.state.canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          bid,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // console.log(gesture.gestures[maxConfidence].name);
          // console.log(gesture.gestures);

          if (gesture.gestures[0].score > 9) {
            console.log("Bidding +200");
            await this.props.placeBid(this.props.bidAmount + 200);
            this.forceUpdate();
            return;
          }
          if (gesture.gestures[1].score > 9) {
            console.log("Bidding +100");
            await this.props.placeBid(this.props.bidAmount + 100);
            this.forceUpdate();
            return;
          }
        }
      }

      const ctx = this.state.canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  render() {
    return (
      <>
        <div style={{ marginTop: "3em", float: "right", right: "0" }}>
          <Webcam
            ref={this.state.webcamRef}
            style={{
              width: 240,
              height: 240,
            }}
          />

          <canvas
            ref={this.state.canvasRef}
            style={{
              width: 240,
              height: 240,
            }}
          />
          <br/>
          <img style={{ width: 50 }} src="/images/thumbs_up.png"></img>
          <h2> Bid with :100£</h2>
          <br/>
            <img style={{ width: 40 }} src="/images/victory.png"></img>
            <h2>Bid with :200£</h2>          
        </div>
      </>
    );
  }
}

export default DetectionHand;
