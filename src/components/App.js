import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  //intializes state array and selected video
  state = { 
    videos: [], 
    //state set to null since it takes time to fetch default component didmount results form YouTube
    selectedVideo: null 
  };

  componentDidMount() {
    this.onTermSubmit('Planet Earth Documentary')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("./search", {
      params: {
        q: term,
      },
    });

    //the response object's data.items property is the list of videos
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "5%" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
