import { useContext } from "react";
import { DataContext, IDataContext } from "./parent";
import { Children2 } from "./children2";

export const Children1 = () => {
  //   const { setUsername } = useContext(DataContext);
  const context = useContext(DataContext);
  const { setUsername } = context as IDataContext;

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
