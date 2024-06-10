import { useNotes } from "../hooks/useNotes";

export const NoteForm = () => {
  const { changeNote, handleAddToDo } = useNotes();

  return (
    <div>
      <textarea onChange={changeNote} name="" id=""></textarea>
      <button onClick={handleAddToDo}>add to do</button>
    </div>
  );
};
