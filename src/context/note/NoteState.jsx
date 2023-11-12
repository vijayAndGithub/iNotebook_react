import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [student1, setStudent1] = useState({
    name: "harry",
    class: "5b",
  });
  const update = () => {
    setTimeout(() => {
      setStudent1({
        name: "harryUpdated",
        class: "10b",
      });
    }, 1500);
  };
  return (
    <NoteContext.Provider value={{ student1, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
