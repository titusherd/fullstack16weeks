import { useAtomValue } from "jotai";
import { notesAtom } from "../context/notes.context";
import { NoteCard } from "./note.card";

export const NotePreview = () => {
  // const [notes] = useAtom(notesAtom); way 1
  const notes = useAtomValue(notesAtom); // way 2

  {
    /* <div>{JSON.stringify(notes, null, 2)}</div> */
  }
  return (
    <div>
      {notes.map((note) => {
        return <NoteCard key={note.id} {...note} />
      })}
    </div>
  );
};
