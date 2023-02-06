import React from "react";
import Form from "./form/form";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Form />
    </div>
  );
};

export default App;
