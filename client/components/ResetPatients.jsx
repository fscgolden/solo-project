import React, { Component } from 'react';


function ResetPatients(props) {
  return (
    <button id="resetButton" onClick={props.handleReset}>View All Patients</button>
  );
}


export default ResetPatients;