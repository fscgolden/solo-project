import React, { Component } from 'react';


class PatientCard extends Component {
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
      .catch(err => console.log('PatientCard.componentDidMount: get patients: ERROR: ', err));
  }

  
  render() {

    const { patients } = this.state;
    console.log('patients is this: ', patients);
    console.log('patients[0] is this: ', patients[0]);
    let newObj = patients[0];
    
    if (patients.length > 0) {
      return (
        <div>
          <p>{newObj.name}</p>
        </div>
      );
    }
    
  }
}


export default PatientCard;