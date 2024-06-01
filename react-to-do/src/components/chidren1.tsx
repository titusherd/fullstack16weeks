import { useContext } from "react";
import { Children2 } from "./children2";
import { DataContext } from "./parent";

export const Children1 = () => {
  const username = useContext(DataContext);
  return (
    <>
      <div>Children1</div>
      <div>CHILDREN 1 {username}</div>
      <Children2 />
    </>
  );
};
