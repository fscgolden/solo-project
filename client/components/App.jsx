import React, { Component } from 'react';
import Patients from './Patients.jsx';
import '../style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Patients />
      </div>
    );
  }
}


export default App;