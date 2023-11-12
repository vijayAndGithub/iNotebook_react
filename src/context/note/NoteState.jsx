import { useState } from "react";
import NoteContext from "./noteContext";
import config from "../../config/config";
const { envVars } = config;

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  //0.Get all notes
  const getAllNotes = async () => {
    const url = `${envVars.apiUrl}/api/v1/notes`;
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0OTVlOTAzNjcxYmFmOTUzNTg4N2UzIn0sImlhdCI6MTY5OTgxMTUxMH0.ytqs3_IFLPBp42Ygae6bIpdDQGDGDC8bYvg_mbXFWQ0";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    let resData = await response.json();
    console.log(resData);
    //Client
    setNotes(resData.data);
  };

  //1.Add a note
  const addNote = async (note) => {
    const url = `${envVars.apiUrl}/api/v1/notes`;
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0OTVlOTAzNjcxYmFmOTUzNTg4N2UzIn0sImlhdCI6MTY5OTgxMTUxMH0.ytqs3_IFLPBp42Ygae6bIpdDQGDGDC8bYvg_mbXFWQ0";
    const noteData = {
      title: note.title,
      description: note.description,
      tag: note.tag,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(noteData), // body data type must match "Content-Type" header
    });
    let resData = await response.json();
    console.log(resData);

    //Client
    setNotes(notes.concat(resData.data));
  };

  //2.Edit a note
  const editNote = async (noteId, note) => {
    console.log("Updating notes with id", noteId, note);
    //ToDo: Api call - edit note
    const url = `${envVars.apiUrl}/api/v1/notes/${noteId}`;
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0OTVlOTAzNjcxYmFmOTUzNTg4N2UzIn0sImlhdCI6MTY5OTgxMTUxMH0.ytqs3_IFLPBp42Ygae6bIpdDQGDGDC8bYvg_mbXFWQ0";
    const noteData = {
      title: note.title,
      description: note.description,
      tag: note.tag,
    };
    //call api:
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(noteData), // body data type must match "Content-Type" header
    });
    console.log(await response.json());

    //Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id == noteId) {
        element.title = note.title;
        element.description = note.description;
        element.tag = note.tag;
      }
    }
  };

  //3.Delete a note
  const deleteNote = (noteId) => {
    console.log("Deleting notes with id", noteId);
    const updatedList = notes.filter((note) => note._id !== noteId);
    setNotes(updatedList);
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, getAllNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
