import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Recommended.css";
function Recommended() {
  return (
    <div className="recommended">
      <h2> Recommended</h2>
      <div className="recommended__videos">
        <VideoCard
          title="How to start a Youtube channel.."
          views="2M views"
          timestamp="1 month ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSuA368CBkyU41etGFxaWKgDf2ni2TWPkeHA&usqp=CAU"
          channel="David Henry"
          image=" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSuA368CBkyU41etGFxaWKgDf2ni2TWPkeHA&usqp=CAU"
        />
        <VideoCard
          title="How to become a stunning phtographer???"
          views="8.3M views"
          timestamp="5 Days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHElGLmvVczCGhT_MwIeM9kgMVU3F4C4TXcA&usqp=CAU"
          channel="Ajay"
          image=" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHElGLmvVczCGhT_MwIeM9kgMVU3F4C4TXcA&usqp=CAU"
        />
        <VideoCard
          title="ReactJS Tutorial for Beginers"
          views="90.1k views"
          timestamp="8 month ago"
          channelImage="https://s3-us-east-2.amazonaws.com/ditrainingco/wp-content/uploads/2020/01/06063857/React-1.png"
          channel="Classic coding"
          image=" https://www.collonmade.com/wp-content/uploads/2017/08/React-JS-1.jpg.webp"
        />
        <VideoCard
          title=" Royal Falooda | Falooda Recipes | Summer desserts recipes channel"
          views="10k views"
          timestamp="1 year ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSuA368CBkyU41etGFxaWKgDf2ni2TWPkeHA&usqp=CAU"
          channel="Recipe Maker"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH14HNx-Hsb8KXMXOqhsia1WO-xFsh08wXsA&usqp=CAU"
        />
        <VideoCard
          title="FEEL THE POWER - Gym Motivation 🔥"
          views="1.1M views"
          timestamp="10 month ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz8jWYLoadW13CQRP-X3F3e4pQZBnDUIpaZw&usqp=CAU"
          channel="Gym Master"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz8jWYLoadW13CQRP-X3F3e4pQZBnDUIpaZw&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Recommended;
