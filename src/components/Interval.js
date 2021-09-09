import React, { useState, useEffect } from "react";

const Interval = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>{seconds} seconds have elapsed since mounting.</h3>
    </div>
  );
};

export default Interval;
