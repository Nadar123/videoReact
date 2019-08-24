import React from 'react';
import './Videoitem.scss'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="img-wrap ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content-wrapper content">
                <div className="title-video header">
                    {video.snippet.title} 
                </div>
            </div>
        </div> 
    );
}

export default VideoItem;