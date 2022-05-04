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