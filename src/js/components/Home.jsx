import React from "react";

const Home = () => {
  let counter = 0;
  const digits = [];

  const updateCounter = () => {
    counter++;
    let value = counter;
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i]) digits[i].textContent = value % 10;
      value = Math.floor(value / 10);
    }
  };

  setTimeout(() => {
    setInterval(updateCounter, 1000);
  }, 0);

  return (
    <div className="container text-center mt-5">
      <h1>Simple Counter</h1>
      <div id="counter" className="d-flex justify-content-center fs-1 mt-4">
        {[...Array(6)].map((_, index) => (
          <div
            className="digit"
            key={index}
            ref={(el) => (digits[index] = el)}
          >
            {0}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;