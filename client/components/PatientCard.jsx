import React, { Component } from 'react';


const PatientCard = (props) => {
  let {name, identifier, date, procedure, notes, biopsy, discussed } = props.info;
  let status = props.status;
  let cleanDate = new Date(date.substring(0, 4), Number(date.substring(5, 7)) - 1, date.substring(8, 10)).toDateString();

  biopsy ? biopsy = 'true' : biopsy = 'false';
  discussed ? discussed = 'true' : discussed = 'false';

  return (
    <div className="patientCard">
      <table>
        <tr>
          <td>Name: </td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Identifier: </td>
          <td>{identifier}</td>
        </tr>
        <tr>
          <td>Date: </td>
          <td>{cleanDate}</td>
        </tr>
        <tr>
          <td>Procedure: </td>
          <td>{procedure}</td>
        </tr>
        <tr>
          <td>Notes: </td>
          <td>{notes}</td>
        </tr>
        <tr>
          <td>Biopsy: </td>
          <td>{biopsy}</td>
        </tr>
        <tr>
          <td>Status: </td>
          <td>{status}</td>
        </tr>
        <tr>
          <td>Discussed: </td>
          <td>
            <select name="discussed" id="discussedDropDown" onChange={(e) => props.handleDiscussion(e, props.info)}>
              <option value="" disabled selected hidden>{discussed}</option>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </td>
        </tr>
      </table>
      <button id="deleteButton" onClick={(e) => props.handleDelete(e, props.info)}>Delete Record</button>
    </div>
  )
}

export default PatientCard;