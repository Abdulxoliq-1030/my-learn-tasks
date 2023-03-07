import React from "react";
import { useNote } from "./note-layout";

interface NoteProps {}

const Note: React.FC<NoteProps> = () => {
  const note = useNote();
  return <></>;
};

export default Note;
