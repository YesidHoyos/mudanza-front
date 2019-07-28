import React, {Component} from 'react';
import MovingForm from './MovingForm';
import Header from './Header';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <MovingForm />
      </div>
    );
  }
}

export default App;
