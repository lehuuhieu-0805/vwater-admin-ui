import { Button } from "@mui/material";
import React from "react";

export default function ButtonCustom(props) {
  const { icon, title, onClick } = props;
  return (
    <Button
      variant={"text"}
      sx={{
        color: "white",
        border: "1px solid #00ab55",
        backgroundColor: "#00ab55",
        "&:hover": {
          backgroundColor: "#00ab55",
          border: "1px solid #00ab55",
        },
      }}
      onClick={onClick}
    >
      {icon}
      {title}
    </Button>
  );
}
