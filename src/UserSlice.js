import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "abc", email: "abc@abc.com" },
  { id: 2, name: "cde", email: "cde@cde.com" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
});

export default userSlice.reducer;
