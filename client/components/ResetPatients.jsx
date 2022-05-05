import React, { Component } from 'react';


function ResetPatients(props) {
  return (
    <button onClick={props.handleReset}>View All Patients</button>
  );
}


export default ResetPatients;