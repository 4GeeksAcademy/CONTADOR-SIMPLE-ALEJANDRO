import React, { useState, useEffect } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  
  const one = counter % 10;
  const two = Math.floor(counter / 10) % 10;
  const three = Math.floor(counter / 100) % 10;
  const four = Math.floor(counter / 1000) % 10;
  const five = Math.floor(counter / 10000) % 10;
  const six = Math.floor(counter / 100000) % 10;

  return (
    <div className="container text-center mt-5">
      <h1>Simple Counter</h1>
      <div id="counter" className="d-flex justify-content-center fs-1 mt-4">
        <div className="digit">{six}</div>
        <div className="digit">{five}</div>
        <div className="digit">{four}</div>
        <div className="digit">{three}</div>
        <div className="digit">{two}</div>
        <div className="digit">{one}</div>
      </div>
    </div>
  );
};

export default Home;