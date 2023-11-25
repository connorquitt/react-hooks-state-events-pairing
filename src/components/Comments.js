import React from "react";
import video from "../data/video.js";

function Comments() {
    console.log(video.comments)
  const comms = video.comments.map((e) => {
    return (
        <div>
            <h2>{e.user}</h2>
            <p>{e.comment}</p>
        </div>
    )
  })
  return comms
}

export default Comments