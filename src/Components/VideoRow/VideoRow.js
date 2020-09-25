import React from "react";
import "./VideoRow.css";

function VideoRow({
  title,
  views,
  subs,
  description,
  timestamp,
  channel,
  image,
}) {
  return (
    <div className="videoRow">
      <img className="videoRow__image" src={image} alt="" />
      <div className="videoRow__info">
        <h4>{title}</h4>
        <p className="videoRow__headline">
          {channel} .{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs} </span>
            Subscribers .
          </span>{" "}
          {views} views . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
