import { useContext } from "react";
import { DataContext } from "./parent";

export const Children2 = () => {
  const { username } = useContext(DataContext);
  return (
    <>
      <div>Children2</div>
      <div>CHILDERN 2 {username}</div>
    </>
  );
};
