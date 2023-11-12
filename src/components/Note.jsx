import { useContext } from "react";
import noteContext from "../context/note/noteContext";
import NoteItem from "./NoteItem";

const Note = () => {
  const notesContext = useContext(noteContext);
  const { notes, setNotes } = notesContext;
  return (
    <div className="row my-3">
      {notes.length &&
        notes.map((note, index) => {
          return <NoteItem key={index} note={note} setNotes={setNotes} />;
        })}
    </div>
  );
};

export default Note;
