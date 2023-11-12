import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6550d97f4c338358db274847",
      user: "65495e903671baf9535887e3",
      title: "note1",
      description: "description about note",
      tag: "123",
      date: "2023-11-12T13:56:15.391Z",
      createdAt: "2023-11-12T13:56:15.393Z",
      updatedAt: "2023-11-12T13:56:15.393Z",
      __v: 0,
    },
    {
      _id: "6550d98b4c338358db27484a",
      user: "65495e903671baf9535887e3",
      title: "note2",
      description: "description about note",
      tag: "Youtube",
      date: "2023-11-12T13:56:27.519Z",
      createdAt: "2023-11-12T13:56:27.519Z",
      updatedAt: "2023-11-12T13:56:27.519Z",
      __v: 0,
    },
    {
      _id: "6550d97f4c338358db274847",
      user: "65495e903671baf9535887e3",
      title: "note1",
      description: "description about note",
      tag: "123",
      date: "2023-11-12T13:56:15.391Z",
      createdAt: "2023-11-12T13:56:15.393Z",
      updatedAt: "2023-11-12T13:56:15.393Z",
      __v: 0,
    },
    {
      _id: "6550d98b4c338358db27484a",
      user: "65495e903671baf9535887e3",
      title: "note2",
      description: "description about note",
      tag: "Youtube",
      date: "2023-11-12T13:56:27.519Z",
      createdAt: "2023-11-12T13:56:27.519Z",
      updatedAt: "2023-11-12T13:56:27.519Z",
      __v: 0,
    },
    {
      _id: "6550d97f4c338358db274847",
      user: "65495e903671baf9535887e3",
      title: "note1",
      description: "description about note",
      tag: "123",
      date: "2023-11-12T13:56:15.391Z",
      createdAt: "2023-11-12T13:56:15.393Z",
      updatedAt: "2023-11-12T13:56:15.393Z",
      __v: 0,
    },
    {
      _id: "6550d98b4c338358db27484a",
      user: "65495e903671baf9535887e3",
      title: "note2",
      description: "description about note",
      tag: "Youtube",
      date: "2023-11-12T13:56:27.519Z",
      createdAt: "2023-11-12T13:56:27.519Z",
      updatedAt: "2023-11-12T13:56:27.519Z",
      __v: 0,
    },
    {
      _id: "6550d97f4c338358db274847",
      user: "65495e903671baf9535887e3",
      title: "note1",
      description: "description about note",
      tag: "123",
      date: "2023-11-12T13:56:15.391Z",
      createdAt: "2023-11-12T13:56:15.393Z",
      updatedAt: "2023-11-12T13:56:15.393Z",
      __v: 0,
    },
    {
      _id: "6550d98b4c338358db27484a",
      user: "65495e903671baf9535887e3",
      title: "note2",
      description: "description about note",
      tag: "Youtube",
      date: "2023-11-12T13:56:27.519Z",
      createdAt: "2023-11-12T13:56:27.519Z",
      updatedAt: "2023-11-12T13:56:27.519Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //1.Add a note
  const addNote = (note) => {
    //ToDo: Api call - create note
    console.log("Adding a note===>\n", note);
    // note = {
    //   title: "note[static]",
    //   description: "description about note",
    //   tag: "123",
    // };
    //ToDo: Read notes- notes variale update
    setNotes(notes.concat(note));
    console.log(notes);
  };
  //1.Edit a note
  const editNote = (noteId) => {};
  //1.Delete a note
  const deleteNote = (noteId) => {};
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
