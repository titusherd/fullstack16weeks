import { useState, useEffect } from "react";

export const NoteForm = () => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isUserValid, setIsUserValid] = useState(false);

  function checkEmailPassword(userName: string, userPassword: string) {
    if (userName === "admin" && userPassword === "admin") {
      setIsUserValid(true);
    } else {
      setIsUserValid(false);
    }
  }
  useEffect(() => {
    console.log("useEffect called");
    checkEmailPassword(userName, userPassword);
  }, [userName, userPassword]);

  // dependency array is to specify when the effect should run
  // zero dependencies means that the effect will only run once after the first render

  return (
    <>
      <div>
        <div>Counter: {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
      <br />
      <div>
        <div>Username: {userName}</div>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <div>Password: {userPassword}</div>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <div>{isUserValid ? "Welcome admin" : "Invalid user"}</div>
    </>
  );
};
