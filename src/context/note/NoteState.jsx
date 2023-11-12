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
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
