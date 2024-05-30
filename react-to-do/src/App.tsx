import { Todolist } from "./components/todolist";

export const App = () => {
  return (
    <>
      <div>App</div>;
      <Todolist />
    </>
  );
};

// difference between export default and export const is that export default is used to export a single class, function or primitive, while export const is used to export multiple classes, functions or variables.
