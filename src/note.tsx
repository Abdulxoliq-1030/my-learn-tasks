import React from "react";
import { useNote } from "./note-layout";

interface NoteProps {}

const Note: React.FC<NoteProps> = () => {
  const note = useNote();
  return (
    <>
      <h1>Hello Note</h1>
    </>
  );
};

export default Note;
