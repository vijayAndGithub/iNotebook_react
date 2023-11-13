import Note from "./Note";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div className="container my-3">
      <Note showAlert={showAlert} />
    </div>
  );
};

export default Home;
