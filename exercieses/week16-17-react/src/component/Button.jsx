import { useState } from "react";

export default function Button({ counter }) {
  const [number, setNumber] = useState(counter);

  function incrementNumber() {
    setNumber(number + 1);
  }

  return <button onClick={incrementNumber}>Clicked {number} times</button>;
}
