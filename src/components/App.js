import React, { Component, useState } from "react";
import "../styles/App.css";
import Project from "./Project";
const App = () => {
  return (
    <>
      <Project projectDescription={"App"} projectName={"sApp"} />
      <Project projectDescription={"Apps"} projectName={"dApp"} />
    </>
  );
};

export default App;
