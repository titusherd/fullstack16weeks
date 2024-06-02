import React, { useState } from "react";
import { Children1 } from "./chidren1";

export const DataContext = React.createContext<string | null>(null);

export const Parent = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      <DataContext.Provider value={{ username, setUsername }}>
        <div>Parent</div>
        <div>PARENT {username}</div>
        <Children1 />
      </DataContext.Provider>
    </>
  );
};
