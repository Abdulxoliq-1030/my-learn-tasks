import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../api/fake-data";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, { payload }) => {
      state.value.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.value = state.value.filter((user) => user.id !== payload.id);
    },
    updateUsername: (state, { payload }) => {
      state.value.map((user) => {
        if (user.id === payload.id) {
          user.username = payload.username;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
