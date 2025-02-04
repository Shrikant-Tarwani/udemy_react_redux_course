import React from 'react';
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"


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
    // constructor(props) {
    //     super(props);

    //     this.state = {lat : null, errorMessage : ''}
    // }

    state = {lat: null, errorMessage: ''};
    componentDidMount() { 
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
        );
    }

    // componentDidUpdate() {
    //     console.log("component was updated -it rerendered");
    // }


    renderContent(){
        // console.log(this.state.lat)              
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div><Spinner message="Please allow location" /></div>
    }

    render(){
       
            return(
            <div className="border red">{
                this.renderContent()
            }</div>
            )
            
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));