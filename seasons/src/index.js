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

        this.state = {lat : null, errorMessage : ''}

       
    }
    componentDidMount() { 
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
        );
    }

    // componentDidUpdate() {
    //     console.log("component was updated -it rerendered");
    // }


    render(){
       
            // console.log(this.state.lat)              
                if(this.state.errorMessage && !this.state.lat){
                    return <div> Error: {this.state.errorMessage}</div>
                }
                if(!this.state.errorMessage && this.state.lat){
                    return <div> Latitude: {this.state.lat}</div>
                }
                return <div>Loading...</div>
            
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));