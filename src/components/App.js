import React, {Component} from 'react';
import MovingForm from './MovingForm';
import Header from './Header';
import axios from 'axios';
import Swal from 'sweetalert2';

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
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.txt');
      document.body.appendChild(link);
      link.click();     
    })
    .catch(error => {
      Swal.fire({
          type: 'error',
          title: 'Error',
          text: `${error.response.data}`
        })      
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
