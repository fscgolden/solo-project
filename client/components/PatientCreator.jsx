import React, { Component } from 'react';


function PatientCreator() {
  function handleSubmit(e) {
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
      })
      .catch(err => console.log('PatientCreator fetch /patients/: ERROR: ', err));

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' id='name' placeholder='Name'/>
      <input type='text' id='identifier' placeholder='Identifier'/>
      <input type='text' id='date' placeholder='Date YYYY-MM-DD'/>
      <input type='text' id='procedure' placeholder='Procedure'/>
      <input type='text' id='notes' placeholder='Notes'/>
      <input type='text' id='biopsy' placeholder='Biopsy? 0 or 1'/>
      <input type='text' id='discussed' placeholder='Discussed? 0 or 1'/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PatientCreator;


// class PatientCreator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     // this.handleClick = this.handleClick.bind(this);
//   }


//   handleClick(event) {
//     // console.log('GOT A CLICK');
//     // alert('event is: ', event);
//     // alert('event.target is: ' + event.target.value);
//     event.preventDefault();
//     console.log(event);
//   }

//   render() {
//     return (
//       <div className="container" id="createPatient">
//         <p>Create New Patient</p>
        
//         <form onSubmit={(e) => this.handleClick(e)}> 
//           <input type='text' id='newPatient'/>
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     );
//   }

// }

{/* <input type='button' onClick={() => this.handleClick(document.getElementById('newPatient').value)} value='Submit'/> */}