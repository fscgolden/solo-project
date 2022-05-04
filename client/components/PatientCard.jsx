import React, { Component } from 'react';


const PatientCard = (props) => {

  let {name, identifier, date, procedure, notes, biopsy, discussed } = props.info;
  let status = props.status;

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
        {/* <li>Discussed: {discussed}</li> */}
        <li>Status: {status}</li>
      </ul>

      <label for="discussed">Discussed?:</label>
      <select name="discussed" id="discussedDropDown" onChange={(e) => props.handleDiscussion(e, props.info)}>
        <option value="" disabled selected hidden>{discussed}</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>

    </div>
  )
}


export default PatientCard;



// const PatientCard = (props) => {

//   let {name, identifier, date, procedure, notes, biopsy, discussed } = props.info;
//   let status = props.status;

//   biopsy ? biopsy = 'true' : biopsy = 'false';
//   discussed ? discussed = 'true' : discussed = 'false';

//   return (
//     <div>
//       <ul>
//         <li>Name: {name}</li>
//         <li>Identifier: {identifier}</li>
//         <li>Date: {date}</li>
//         <li>Procedure: {procedure}</li>
//         <li>Notes: {notes}</li>
//         <li>Biopsy: {biopsy}</li>
//         <li>Discussed: {discussed}</li>
//         <li>Status: {status}</li>
//       </ul>
//     </div>
//   )
// }