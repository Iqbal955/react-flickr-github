import React, { Component} from "react";
import SearchForm from './components/SearchForm';
import axios from 'axios';
import ImageList from './components/ImageList';


export default class App extends Component
{



  constructor() {
    super();
    this.state = {
        images: [],

    };
  }


    componentDidMount() {
this.performSearch()
    }


    performSearch = (query = "smile") => {
      
    return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7da6019abd1f54417e2f3d9f8fbf4ea6&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     .then(response => {
      console.log(response.data);
        this.setState({
          images: response.data.photos.photo
         

        })
        
        


     });



    }
  
 render() {
  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={this.performSearch}/>      
        </div>   
      </div>    
      <div className="photo-container">
        { <ImageList data={this.state.images} />
        }
        
      </div>
    </div>
  );
}

}
