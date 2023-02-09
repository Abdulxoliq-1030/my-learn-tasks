import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { UserType } from "./api/fake-data";
import { addUser, deleteUser, updateUsername } from "./features/users";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const userList = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState<string | null>();
  const [username, setUsername] = useState<string | null>();
  const [newUserName, setNewUsername] = useState<string | null>();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
      className="app">
      <div className="addUser">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username..."
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: uuidv4(),
                name,
                username,
              })
            );
          }}>
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user: UserType) => (
          <div style={{ textAlign: "center" }}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type="text"
              placeholder="New Username..."
              onChange={(e) => {
                setNewUsername(e.target.value);
              }}
            />
            <button
              onClick={() =>
                dispatch(updateUsername({ id: user.id, username: newUserName }))
              }>
              Update Username
            </button>
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
              Delete Username
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
