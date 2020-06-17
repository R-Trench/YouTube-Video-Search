import React from 'react'

const VideoDetail = (props) => {
    if (!props.video){
        return <div></div>
    }

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