import React, { Component } from 'react';

import Patients from './Patients.jsx';
import PatientCreator from './PatientCreator.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <p>Hello WorldDDD</p>
        <button id="reset">Reset board</button>
        <PatientCreator />
        <Patients />
      </div>
    );
  }
}


export default App;