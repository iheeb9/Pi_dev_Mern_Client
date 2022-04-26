import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const bid = new GestureDescription('bid'); 

bid.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
bid.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
bid.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

bid.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
bid.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

bid.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
bid.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring]){
    bid.addCurl(finger, FingerCurl.FullCurl, .75); 
    bid.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
