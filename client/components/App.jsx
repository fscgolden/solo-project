import React, { Component } from 'react';

import PatientCard from './PatientCard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <p>Hello WorldDDD</p>
        <button id="reset">Reset board</button>
        <PatientCard/>
      </div>
    );
  }
}


export default App;