import React from 'react';
import VideoListItem from './videoListItem'

const VideoList = (props) => {

  const videoMarkup = props.videos.map(function(vid){
    return <VideoListItem key={vid.etag} video={vid} />;
  })
  return (
    <ul className="col-md-4 list-group">
      {videoMarkup}
    </ul>
  )
};

export default VideoList;
