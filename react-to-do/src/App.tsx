// import { Todolist } from "./components/archived/todolist";
import { Parent } from "./components/parent";

export const App = () => {
  return (
    <>
      <div>App</div>
      <Parent />
    </>
  );
};

// difference between export default and export const is that export default is used to export a single class, function or primitive, while export const is used to export multiple classes, functions or variables.
