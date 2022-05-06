import React, { Component } from 'react';
import PatientCard from './PatientCard.jsx';
import PatientCreator from './PatientCreator.jsx';
import PatientLookup from './PatientLookup.jsx';
import ResetPatients from './ResetPatients.jsx';


class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiscussion = this.handleDiscussion.bind(this);
    this.handleLookup = this.handleLookup.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    
    fetch('/patients/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(patientData)
    })
      .then(resp => resp.json())
      .then((data) => {
        
        // send data to be display on page
        return this.setState({
          patients: [...this.state.patients, data]
        })
      })
      .catch(err => console.log('Patients fetch /patients/: ERROR: ', err));
  }

  handleDiscussion(e, info) {
    const discussed = (e.target.value === 'true' ? true : false);
    const patientData = {
      ...info,
      discussed
    }

    fetch('/patients/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(patientData)
    })
      .then(resp => resp.json())
      .then((data) => {
        const prevPatients = this.state.patients;
        const updatedPatients = prevPatients.map((el) => {
          if (el.name === patientData.name && el.identifier === patientData.identifier) {
            return data;
          } else {
            return el;
          }
        });
        // send data to be display on page
        return this.setState({
          patients: updatedPatients
        })
      })
      .catch(err => console.log('Patients patch /patients/: ERROR: ', err));
  }

  handleLookup(e) {
    e.preventDefault();
    console.log('e.target is this: ', e.target);
    console.log('e.target.procedure.value is this: ', e.target.procedure.value);
    console.log('e.target.identifier.value is this: ', e.target.identifier.value === '');

    const name = e.target.name.value;
    const identifier = e.target.identifier.value;
    const date = e.target.date.value;
    const procedure = e.target.procedure.value;
    const notes = e.target.notes.value;
    const biopsy = e.target.biopsy.value;
    const discussed = e.target.discussed.value;
    
    const prevPatients = this.state.patients;
    const filteredPatients = prevPatients.filter((el) => {
      let match = true;
      if (name !== '' && el.name !== name) match = false;
      if (identifier !== '' && el.identifier !== identifier) match = false;
      if (date !== '' && el.date !== date) match = false;
      if (procedure !== '' && el.procedure !== procedure) match = false;
      if (notes !== '' && el.notes !== notes) match = false;
      if (biopsy !== '' && el.biopsy !== biopsy) match = false;
      if (discussed !== '' && el.discussed !== discussed) match = false;
      return match;
    });
    
    return this.setState({
      patients: filteredPatients
    });
  }

  handleReset(e) {
    e.preventDefault();

    fetch('/patients/')
    .then(res => res.json())
    .then((patients) => {
      return this.setState({
        patients
      });
    })
    .catch(err => console.log('Patients.handleReset: get patients: ERROR: ', err));
  }

  handleDelete(e, info) {
    const patientData = {...info}
    console.log('patientData is: ', patientData);

    fetch('/patients/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(patientData)
    })
      .then(resp => resp.json())
      .then((data) => {
        const prevPatients = this.state.patients;
        const updatedPatients = prevPatients.filter((el) => {
          if (el.name === patientData.name && el.identifier === patientData.identifier) {
            return false;
          } else {
            return true;
          }
        });
        // send data to be display on page
        return this.setState({
          patients: updatedPatients
        })
      })
      .catch(err => console.log('Patients delete /patients/: ERROR: ', err));
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
            handleDiscussion={this.handleDiscussion}
            handleDelete={this.handleDelete}
          />
        );
      })

      const resolvedPatients = resolved.map((el) => {
        return (
          <PatientCard
            info={el}
            status={'resolved'}
            handleDiscussion={this.handleDiscussion}
            handleDelete={this.handleDelete}
          />
        );
      })

      return (
        <div>
          <div id="formSection">
            <PatientCreator handleSubmit={this.handleSubmit}/>
            <PatientLookup handleLookup={this.handleLookup}/>
            <div id="picContainer">
              <img src="https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/GettyImages-1300505874%20%282%29.jpg?VersionId=_LaQiBzH53IwA3TdrgD._2kAnI3oKSRP"></img>
            </div>
          </div>
          
          <div id="resetHolder">
            <ResetPatients handleReset={this.handleReset}/>
          </div>

          <div className="pendingContainer">
            <h2>Pending Patients</h2>
            <div className="cardsHolder">
              {pendingPatients}
            </div>
          </div>
          
          <div className="resolvedContainer">
            <h2>Resolved Patients</h2>
            <div className="cardsHolder">
              {resolvedPatients}
            </div>
          </div>
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