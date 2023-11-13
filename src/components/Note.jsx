import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/note/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Note = (props) => {
  const { showAlert } = props;
  let navigate = useNavigate();

  const notesContext = useContext(noteContext);
  const { notes, getAllNotes, editNote } = notesContext;

  const [note, setNote] = useState({
    _id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("access_token")) {
        await getAllNotes();
      } else {
        navigate("/login");
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  const modalRef = useRef(null);
  const closeRef = useRef(null);

  //fns
  const updateNote = (currentNote) => {
    modalRef.current.click();
    setNote({
      _id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote({
      _id: note._id,
      title: note.etitle,
      description: note.edescription,
      tag: note.etag,
    });
    showAlert("Updated successfully!", "success");
    closeRef.current.click();
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <AddNote showAlert={showAlert} />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={modalRef}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3" onSubmit={handleClick}>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                {/* </form>
            </div> */}
                <div className="modal-footer">
                  <button
                    ref={closeRef}
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      note.etitle.length < 5 ||
                      note.edescription.length < 5 ||
                      note.etag.length < 5
                    }
                  >
                    Update Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.length === 0 && (
          <div className="container mx-2">No notes to display</div>
        )}
        {notes.length > 0 &&
          notes.map((note, index) => {
            return (
              <NoteItem
                key={index}
                showAlert={showAlert}
                note={note}
                updateNote={updateNote}
              />
            );
          })}
      </div>
    </>
  );
};

export default Note;
