const Alert = (props) => {
  let word = "Success!";
  if (props.alert && props.alert.type === "danger") {
    word = "Error!";
  }
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{word} - </strong>
          {`${props.alert.message}`}
        </div>
      )}
    </div>
  );
};

export default Alert;
