import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NoteForm } from "./components/noteform";

export default function App() {
  return (
    <main>
      <NoteForm />
      <ul>
        <li>
          <Link to="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <div>Profile</div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div>About</div>
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </main>
  );
}
