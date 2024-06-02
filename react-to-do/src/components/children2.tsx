import { useContext } from "react";
import { DataContext, IDataContext } from "./parent";

export const Children2 = () => {
  //   const { username } = useContext(DataContext);
  const context = useContext(DataContext);
  const { username } = context as IDataContext;
  
  return (
    <>
      <div>Children2</div>
      <div>CHILDERN 2 {username}</div>
    </>
  );
};
