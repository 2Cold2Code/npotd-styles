import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {HeaderStyle} from './styles/header_style';
import Header from "./Header";
import MainSection from "./MainSection";

function App() {
  const dates = prompt('Enter a year, month and day in the form: yyyy-mm-dd')
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dates}`
      )
      .then((response) => {
        console.log(response);
        setHoldResponse(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const [holdResponse, setHoldResponse] = useState("");

  return (
    <div className="App">
      <Header className="header" />
      <MainSection className="main-body" data={holdResponse} />
    </div>
  );
}

export default App;
