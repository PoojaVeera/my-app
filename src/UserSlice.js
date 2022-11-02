import { UsersData } from "./Fakedata";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    editUser: (state, action) => {
      const { id, name, mail } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.mail = mail;
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
