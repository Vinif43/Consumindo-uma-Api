import React from "react";
import { useEffect, useState } from "react";

const ChuckNorris = () => {

  const [chuck, setChuck] = useState("chucks here");

  useEffect(() => {
    getchuck();
  }, []);

  const getchuck = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data)
    setChuck(data.value);
  };


  return (
    <div className="container">
      <h1>Chuck Norris Facts</h1>
      <p className="chuck">{chuck}</p>
      <button type="button" className="btn">
        Get Another Fact
      </button>
    </div>
  );
};

export default ChuckNorris;