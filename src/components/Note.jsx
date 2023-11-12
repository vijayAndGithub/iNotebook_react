import { useContext } from "react";
import noteContext from "../context/note/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Note = () => {
  const notesContext = useContext(noteContext);
  const { notes, setNotes, addNote } = notesContext;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.length &&
          notes.map((note, index) => {
            return (
              <NoteItem
                key={index}
                note={note}
                setNotes={setNotes}
                addNote={addNote}
              />
            );
          })}
      </div>
    </>
  );
};

export default Note;
