import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
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
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));