import { useContext } from "react";
import { DataContext } from "./parent";
import { Children2 } from "./children2";

export const Children1 = () => {
  const { setUsername } = useContext(DataContext);

  return (
    <>
      <div>Children1</div>
      <div>CHILDREN 1</div>
      <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <Children2 />
    </>
  );
};
