import { useContext } from "react";
import noteContext from "../context/note/noteContext";

const NoteItem = (props) => {
  const { showAlert } = props;

  const notesContext = useContext(noteContext);
  const { deleteNote } = notesContext;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h3 className="card-text">{note.title}</h3>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={async () => {
                await deleteNote(note._id);
                showAlert("Deleted successfully!", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={async () => {
                await updateNote(note);
              }}
            ></i>
          </div>

          <p className="card-text">{note.description}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
