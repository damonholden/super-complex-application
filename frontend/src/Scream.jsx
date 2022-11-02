import { useState } from "react";
import { screamString } from "./util/screamString";

export const Scream = () => {
  const [input, setInput] = useState('');
  const [screamedInput, setScreamedInput] = useState('');

  return (
    <section>
      <h2>scream string</h2>
      <label>type something to be screamed:</label>
      <input value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => setScreamedInput(screamString(input))}>scream</button>
      <output>{screamedInput}</output>
    </section>
  );
};
