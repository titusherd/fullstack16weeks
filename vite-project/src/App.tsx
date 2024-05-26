import { Header } from "./components/header";
import { Usercard } from "./components/usercard";

export default function App() {
  return (
    <>
      <div>Hello</div>
      <Header />
      <Usercard name="Titus" nationality="Indonesia" gender="Male" />
      <Usercard name="Ayya" nationality="Indonesia" gender="Female" />
    </>
  );
}
