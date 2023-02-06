import React from "react";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <form>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" type="text" />
      </div>
    </form>
  );
};

export default App;
