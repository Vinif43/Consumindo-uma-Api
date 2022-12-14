import React from "react";
import { useEffect, useState } from "react";

const ChuckNorris = () => {

  const [chuck, setChuck] = useState("chucks here");

  useEffect(() => {
    getChuck();
  }, []);

  const getChuck = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setChuck(data.value);
  };


  return (
    <div className="container">
      <h1>Chuck Norris Facts</h1>
      <p className="chuck">{chuck}</p>
      <button type="button" className="btn" onClick={getChuck}>
        Get Another Fact
      </button>
    </div>
  );
};

export default ChuckNorris;