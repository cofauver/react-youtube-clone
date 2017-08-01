import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const imageSrc = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageSrc} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <a href={'https://www.youtube.com/watch?v=' + video.id.videoId}>{video.snippet.title}</a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
