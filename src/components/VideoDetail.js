import React from 'react'

const VideoDetail = (props) => {

    //while loading -> extremely brief here in this use case build out loading page if fetching more results
    if (!props.video){
        return <div>loading...</div>
    }

    //iframe src, with dynamic variable based of video id of http response
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    
    return (
    <div>
        <div className="ui embed">
        <iframe title="vidPlayer" width="893" height="502" src={videoSrc} allowfullscreen></iframe>
        </div>
            <div className="ui segment">
                <h4 className="ui header">Selected Video: {props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p> 
            </div>
        
    </div>
    )
}

export default VideoDetail