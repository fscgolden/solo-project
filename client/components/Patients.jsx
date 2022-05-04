import React, { Component } from 'react';
import PatientCard from './PatientCard.jsx';


class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    }
  }


  componentDidMount() {
    fetch('/patients/')
      .then(res => res.json())
      .then((patients) => {
        return this.setState({
          patients
        });
      })
      .catch(err => console.log('Patients.componentDidMount: get patients: ERROR: ', err));
  }

  
  render() {

    const { patients } = this.state;
    console.log('patients is this: ', patients);
    console.log('patients[0] is this: ', patients[0]);
    let newObj = patients[0];
    
    if (patients.length > 0) {

      const patientElems = patients.map((pat, index) => {
        return (
          <PatientCard
            key={index}
            info={pat}
          />
        );
      })


      return (
        <div className="patientsContainer">
          {patientElems}
        </div>
      );
      
    }
    
  }
}


export default Patients;