import React from "react";
import { NoteData } from "./App";
import NoteForm from "./note-form";

interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
}

const NewNote: React.FC<NewNoteProps> = ({ onSubmit }) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
};

export default NewNote;
