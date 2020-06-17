import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from '../components/VideoList'

class App extends React.Component {
 
  //intializes state array
  state = {videos: [] }

  onTermSubmit = async (term) =>{
    const response = await youtube.get('./search', {
      params: {
        q: term
      }
    })

    //the response object's data.items property is the list of videos
    this.setState({videos: response.data.items})
  }

  render(){
    return (
      <div className="ui container" style={{margin: '5%'}}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
