import { useState } from "react";
import NoteContext from "./noteContext";
import config from "../../config/config";
const { envVars } = config;

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  //0.Get all notes

  const getAllNotes = async () => {
    const access_token = localStorage.getItem("access_token");
    const url = `${envVars.apiUrl}/api/v1/notes`;
    console.log(`Bearer ${access_token}`);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
    let resData = await response.json();
    console.log("resData==>", resData.data);
    console.log(notes.length);
    //Client
    setNotes(resData.data);
    console.log("resData==>", resData.data);
    console.log(notes.length);
  };

  //1.Add a note
  const addNote = async (note) => {
    const access_token = localStorage.getItem("access_token");
    const url = `${envVars.apiUrl}/api/v1/notes`;
    const noteData = {
      title: note.title,
      description: note.description,
      tag: note.tag,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(noteData), // body data type must match "Content-Type" header
    });
    let resData = await response.json();
    console.log(resData);

    //Client
    setNotes(notes.concat(resData.data));
  };

  //2.Edit a note
  const editNote = async (note) => {
    const access_token = localStorage.getItem("access_token");
    const url = `${envVars.apiUrl}/api/v1/notes/${note._id}`;
    const noteData = {};
    if (note.title) {
      noteData.title = note.title;
    }
    if (note.description) {
      noteData.description = note.description;
    }
    if (note.tag) {
      noteData.tag = note.tag;
    }
    //call api:
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(noteData), // body data type must match "Content-Type" header
    });
    const resData = await response.json();
    console.log(resData);

    //Client
    const updatedNotes = notes.map((element) => {
      if (element._id === note._id) {
        element.title = note.title;
        element.description = note.description;
        element.tag = note.tag;
      }
      return element;
    });

    setNotes(updatedNotes);
  };

  //3.Delete a note
  const deleteNote = async (noteId) => {
    const access_token = localStorage.getItem("access_token");
    const url = `${envVars.apiUrl}/api/v1/notes/${noteId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
    const resData = await response.json();
    console.log(resData);

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
