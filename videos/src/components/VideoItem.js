 
import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video }) => {
  return (
    <div className="item">
        <img className = "ui image"src={video.snippet.thumbnails.default} />
        <div className="content">
            <div clas sName="header">
            {video.snippet.title}
            </div>
        </div>     
    </div>
  );
};

export default VideoItem;