import React from "react";


const CommentDetail =(props) =>{
    // console.log(props)
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="Avatar" src={props.image}/>
                </a>
                <div className="content">
                    <a href="/" className="avatar">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
    )
}

export default CommentDetail;