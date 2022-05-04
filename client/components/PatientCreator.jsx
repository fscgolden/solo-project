import React, { Component } from 'react';


function PatientCreator() {
  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const identifier = e.target.identifier.value;
    const date = e.target.date.value;
    const procedure = e.target.procedure.value;
    const biopsy = e.target.biopsy.value;
    const findings = e.target.findings.value;
    const discussed = e.target.discussed.value;
    let patientData = {name, identifier, date, procedure, biopsy, findings, discussed};
    console.log('patient data: ', patientData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' id='name'/>
      <input type='text' id='identifier'/>
      <input type='text' id='date'/>
      <input type='text' id='procedure'/>
      <input type='text' id='biopsy'/>
      <input type='text' id='findings'/>
      <input type='text' id='discussed'/>
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