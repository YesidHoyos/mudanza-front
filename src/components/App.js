import React, {Component} from 'react';
import MovingForm from './MovingForm';
import Header from './Header';
import axios from 'axios';

class App extends Component{

  makeMove = (dni, file) => {
    
    const formData = new FormData();
    formData.append('file', file);

    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }
    axios.post(`http://localhost:8080/mudanza/viajes/${dni}`, formData, config)
    .then(response => {
      console.log(response);      
    })
    .catch(error => {
      console.log(error);      
    })
  }

  render(){
    return(
      <div>
        <Header />
        <MovingForm makeMove={this.makeMove}/>
      </div>
    );
  }
}

export default App;
