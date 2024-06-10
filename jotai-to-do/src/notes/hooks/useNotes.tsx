import { notesStorageAtom } from "../context/notes.context";
import { useAtom } from "jotai";
import { useState } from "react";
import { INote } from "../../types/entity";
import { createId } from "@paralleldrive/cuid2";

export const useNotes = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useAtom(notesStorageAtom);

  function changeNote(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNote(event.target.value);
  }

  function handleAddToDo() {
    const newNote: INote = {
      id: createId(),
      content: note,
      createdAt: new Date(),
      username: "Anonymous",
    };
    setNotes([...notes, newNote]);
    // add to local storage
  }

  return { changeNote, handleAddToDo };
};
