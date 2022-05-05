import React, { Component } from 'react';


function PatientCreator(props) {
  return (
    <div className="patientCreator">
      <h2 id="formTitle">New Patient Form</h2>
      <form onSubmit={props.handleSubmit} className="patientForm">
        <input type='text' id='name' placeholder='Name'/>
        <input type='text' id='identifier' placeholder='Identifier'/>
        <input type='text' id='date' placeholder='Date YYYY-MM-DD'/>
        <input type='text' id='procedure' placeholder='Procedure'/>
        <input type='text' id='notes' placeholder='Notes'/>
        <input type='text' id='biopsy' placeholder='Biopsy? 0 or 1'/>
        <input type='text' id='discussed' placeholder='Discussed? 0 or 1'/>
        <input type='submit' value="Submit"/>
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default PatientCreator;