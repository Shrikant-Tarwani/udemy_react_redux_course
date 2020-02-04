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

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat : position.coords.latitude})
            },
            err => console.log(err)
        );
    }

    render(){
       
            // console.log(this.state.lat);
            return(                
                <div>latitude: {this.state.lat}</div>
            )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));