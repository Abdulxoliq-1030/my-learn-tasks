import React from "react";
import { Form, Stack } from "react-bootstrap";

interface NoteFormProps {}

const NoteForm: React.FC<NoteFormProps> = () => {
  return (
    <Form>
      <Stack gap={4}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>
    </Form>
  );
};

export default NoteForm;
