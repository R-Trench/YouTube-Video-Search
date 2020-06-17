import './VideoItem.css'
import React from "react";


//based off http response object, just console log props.video to plug and play different properties
const VideoItem = (props) => {
  return (
    <div onClick={()=> props.onVideoSelect(props.video)} className="video-item item">
      <img className="ui image" alt={props.video.snippet.title} src={props.video.snippet.thumbnails.default.url}></img>
      <div className="content">
          <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
