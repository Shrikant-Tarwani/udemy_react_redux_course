import React from 'react';
import ReactDOM from "react-dom";


//Functional component

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );
//     return(
//         <div></div>
//     )
// }

//Class Component

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {lat : null}
    }

    render(){
        window.navigator.geolocation.getCurrentPosition(
                position => console.log(position),
                err => console.log(err)
            );
            return(
                <div>l</div>
            )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));