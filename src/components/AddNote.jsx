import { useContext, useState } from "react";
import noteContext from "../context/note/noteContext";

const AddNote = (props) => {
  const { showAlert } = props;

  const notesContext = useContext(noteContext);
  const { addNote } = notesContext;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleAddNote = async (e) => {
    e.preventDefault();
    await addNote(note);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    showAlert("Added successfully!", "success");
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h2>Add a note</h2>
      <form className="my-3" onSubmit={handleAddNote}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            note.title.length < 5 ||
            note.description.length < 5 ||
            note.tag.length < 5
          }
        >
          Add a Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
