import React from "react";
import faker from "faker";

const CommentDetail =() =>{
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="Avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="avatar">
                        Bhavin
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 4:00 pm</span>
                    </div>
                    <div className="text">Nice Blog!!</div>
                </div>
            </div>
    )
}

export default CommentDetail;