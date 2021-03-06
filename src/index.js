import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

// DON'T MAKE ANY COMMITS OR DON'T PUSH TO GITHUB
const API_KEY = process.env.YT_KEY;

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo: null
    };
    YTSearch({key: API_KEY, term:'ultimate frisbee'}, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // ^ this.setState({videos}) is syntactic sugar for
      // this.setState({videos: videos})
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
