import React from "react";
import { NoteData, Tag } from "./App";
import NoteForm from "./note-form";
import { useNote } from "./note-layout";

interface EditNoteProps {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

const EditNote: React.FC<EditNoteProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}) => {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
