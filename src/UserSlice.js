import { UsersData } from "./Fakedata";
import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";
// const initialState = [
//   { id: 1, name: "abc", mail: "abc@abc.com" },
//   { id: 2, name: "cde", mail: "cde@cde.com" },
// ];

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
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
