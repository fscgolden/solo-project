import React, { Component } from 'react';
import PatientCard from './PatientCard.jsx';
import PatientCreator from './PatientCreator.jsx';


class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const identifier = e.target.identifier.value;
    const date = e.target.date.value;
    const procedure = e.target.procedure.value;
    const notes = e.target.notes.value;
    const biopsy = e.target.biopsy.value;
    const discussed = e.target.discussed.value;
    
    const patientData = { name, identifier, date, procedure, notes, biopsy, discussed };
    
    console.log('patient data: ', patientData);
    alert('HEY GOT HERE');

    fetch('/patients/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(patientData)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log('response from server: ', data);
        
        // send data to be display on page
        return this.setState({
          patients: [...this.state.patients, data]
        })
      })
      .catch(err => console.log('Patients fetch /patients/: ERROR: ', err));
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
    
    // Only render PatientCards if patients exist in database
    if (patients.length > 0) {
          
      const pending = patients.filter((el) => {
        return (el.biopsy && !el.discussed)
      });

      const resolved = patients.filter((el) => {
        return (!el.biopsy || (el.biopsy && el.discussed))
      });

      const pendingPatients = pending.map((el) => {
        return (
          <PatientCard
            info={el}
            status={'pending'}
          />
        );
      })

      const resolvedPatients = resolved.map((el) => {
        return (
          <PatientCard
            info={el}
            status={'resolved'}
          />
        );
      })

      return (
        <div className="patientsContainer">
          <PatientCreator handleSubmit={this.handleSubmit}/>
          <h2>Pending Patients</h2>
            {pendingPatients}
          <h2>Resolved Patients</h2>
            {resolvedPatients}
        </div>
      );
    }
    else {
      return (
        <div className="patientsContainer">
          <PatientCreator handleSubmit={this.handleSubmit}/>
        </div>
      );
    }
  }
}


export default Patients;