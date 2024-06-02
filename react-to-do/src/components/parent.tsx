import React, { useState } from "react";
import { Children1 } from "./chidren1";

export interface IDataContext {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = React.createContext<IDataContext | null>(null);

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
