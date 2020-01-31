import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail"
import faker from "faker";
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author="Bhavin" timeAgo = "Today at 4:00 PM" comment = "Nice Blog"  image = {faker.image.avatar()}/>
            <CommentDetail author="Ankur" timeAgo = "Today at 2:00 AM" comment = "Great Blog" image = {faker.image.avatar()}/>
            <CommentDetail author="Kartik" timeAgo = "Yesterday at 4:00 PM" comment = "Good Blog" image = {faker.image.avatar()}/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));