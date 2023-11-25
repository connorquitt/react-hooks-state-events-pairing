import React, { useState } from "react";
import video from "../data/video";
import Comments from "./Comments";

function Main() {
    const [isHidden, setIsHidden] = useState(true)
    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)

    function handleHide() {
        setIsHidden(!isHidden)
    }

    function handleClick(event) {
        if(event.target.className === "like") {
            return setLikes(likes + 1)
        }else if(event.target.className === "dislike") {
            return setDislikes(dislikes + 1)
        }
    }
    return (
        <div id='main'>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <div id='info'>
                <h1>{video.title}</h1>
                <p style={{fontSize: 25}}>{video.views + ' views'} | {'Uploaded ' + video.createdAt}</p>
            </div>
            <div id='likes'>
                <input style={{fontSize: 20}} type='button' value={likes + '👍'} className="like" onClick={handleClick}/>
                <input style={{fontSize: 20}} type='button' value={dislikes + '👎'} className="dislike" onClick={handleClick}/>                
            </div>
            <div id='comments'>
                <input style={{fontSize: 15}} type='button' value={isHidden ? 'show comments' : 'hide comments'} onClick={handleHide}/>
                {isHidden ? null : <Comments />}
            </div>
        </div>
    )
}

export default Main