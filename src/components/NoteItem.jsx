const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h3 className="card-text">{note.title}</h3>
            <i className="fa-solid fa-trash mx-2"></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
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
