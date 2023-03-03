import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NewNote from "./new-note";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
