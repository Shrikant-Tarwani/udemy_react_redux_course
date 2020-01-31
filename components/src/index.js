import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail"

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Bhavin" />
            <CommentDetail author="Ankur" />
            <CommentDetail author="Kartik" />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));