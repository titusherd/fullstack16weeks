import { useState } from "react";

export const NoteForm = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
};
