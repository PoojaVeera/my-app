import React from "react";
import { Button } from "@mui/material";
export const Buttons = ({ handleAdd, children }) => {
  return (
    <div>
      <br />
      <Button variant="contained" onClick={handleAdd}>
        add user
        {children}
      </Button>
    </div>
  );
};
