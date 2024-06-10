import { useAtomValue } from "jotai";
import { notesAtom, notesStorageAtom } from "../context/notes.context";
import { NoteCard } from "./note.card";

export const NotePreview = () => {
  // const [notes] = useAtom(notesAtom); way 1
  const notes = useAtomValue(notesStorageAtom); // way 2

  {
    /* <div>{JSON.stringify(notes, null, 2)}</div> */
  }
  return (
    <div>
      {notes.map((note) => {
        return <NoteCard key={note.id} {...note} />;
      })}
    </div>
  );
};
