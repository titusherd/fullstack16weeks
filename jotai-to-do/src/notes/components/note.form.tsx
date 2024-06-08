import { useState } from "react";
import { notesAtom } from "../context/notes.context";
import { useAtom } from "jotai";
import { createId } from "@paralleldrive/cuid2";
import { INote } from "../../types/entity";

export const NoteForm = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useAtom(notesAtom);

  function handleAddToDo() {
    const newNote: INote = {
      id: createId(),
      content: note,
      createdAt: new Date(),
      username: "Anonymous",
    };
    setNotes([...notes, newNote]);
  }

  return (
    <div>
      <textarea
        onChange={(e) => setNote(e.target.value)}
        name=""
        id=""
      ></textarea>
      <button onClick={handleAddToDo}>add to do</button>
    </div>
  );
};
