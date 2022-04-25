import { useState, useEffect } from "react";

export default function About() {
  const DEFAULT_USER = "Joakim";

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(parseInt(x) + parseInt(y));
  }, [x, y]);

  function handleX(e) {
    setX(e.target.value);
  }

  function handleY(e) {
    setY(e.target.value);
  }

  return (
    <>
      <h1>About</h1>
      <p>Enter a number in each of the text inputs</p>
      <input onChange={handleX} type="number" value={x} />
      <input onChange={handleY} type="number" value={y} />
      <p>The sum of the numbers are {sum}</p>
    </>
  );
}
