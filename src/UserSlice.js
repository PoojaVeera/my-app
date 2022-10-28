import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = [
  { id: uuid(), name: "abc", mail: "abc@abc.com" },
  { id: uuid(), name: "cde", mail: "cde@cde.com" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
