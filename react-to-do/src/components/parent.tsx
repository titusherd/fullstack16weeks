import React from "react";
import { Children1 } from "./chidren1";

export const DataContext = React.createContext<string | null>(null);

export const Parent = () => {
  const username = "John Doe";

  return (
    <>
      <DataContext.Provider value={username}>
        <div>Parent</div>
        <div>PARENT {username}</div>
        <Children1 />
      </DataContext.Provider>
    </>
  );
};
