import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const { projectName, projectDescription } = props;
  return (
    <>
      <p>{projectName}</p>
      <p>{projectDescription}</p>
    </>
  );
};

export default App;
