import React, { Component } from 'react';


const PatientCard = (props) => {

  let {name, identifier, date, procedure, notes, biopsy, discussed } = props.info;

  biopsy ? biopsy = 'true' : biopsy = 'false';
  discussed ? discussed = 'true' : discussed = 'false';

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Identifier: {identifier}</li>
        <li>Date: {date}</li>
        <li>Procedure: {procedure}</li>
        <li>Notes: {notes}</li>
        <li>Biopsy: {biopsy}</li>
        <li>Discussed: {discussed}</li>
      </ul>
    </div>
  )

}


export default PatientCard;




// class PatientCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       patients: []
//     }
//   }


//   componentDidMount() {
//     fetch('/patients/')
//       .then(res => res.json())
//       .then((patients) => {
//         return this.setState({
//           patients
//         });
//       })
//       .catch(err => console.log('PatientCard.componentDidMount: get patients: ERROR: ', err));
//   }

  
//   render() {

//     const { patients } = this.state;
//     console.log('patients is this: ', patients);
//     console.log('patients[0] is this: ', patients[0]);
//     let newObj = patients[0];
    
//     if (patients.length > 0) {
//       return (
//         <div>
//           <p>{newObj.name}</p>
//         </div>
//       );
//     }
    
//   }
// }