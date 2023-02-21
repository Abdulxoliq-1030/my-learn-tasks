import React from "react";
import NoteForm from "../../components/note-form";

interface NewNoteProps {}

const NewNote: React.FC<NewNoteProps> = () => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm />
    </>
  );
};

export default NewNote;
