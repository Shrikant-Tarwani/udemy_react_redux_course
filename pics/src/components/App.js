import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    state = {images : []};
    
     onSearchSubmit = async (term) => {
        // console.log(term);
       const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID d0d024cc69d5f503ec1b29505db847826fa0878f7cab3533089a5dd586852154'
            }
        });
        // console.log(response.data.results);
        this.setState({images : response.data.results});
        
    }

    render() {
    return (<div className ="ui container" style ={{marginTop: '10px'}}><SearchBar onSubmit={this.onSearchSubmit} />
        Found :{this.state.images.length} images
    </div>)
}
}
export default App;