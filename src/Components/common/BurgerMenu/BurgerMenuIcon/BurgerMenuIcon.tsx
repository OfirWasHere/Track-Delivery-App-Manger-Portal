import "./BurgerMenuIcon.css";
import { Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../../Redux/RootReducer";

function BurgerMenuIcon(): JSX.Element {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  
  const clickHandler = () => {
    if (isOpen) {
      dispatch({ type: "CLOSE_DRAWER" });
    } else {
      dispatch({ type: "OPEN_DRAWER" });
    }
  };

  return (
    <Box>
      <IconButton onClick={clickHandler} sx={{ color: "#fff" }}>
        <div className={`burger-icon ${isOpen ? "open" : ""}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </IconButton>
    </Box>
  );
}

export default BurgerMenuIcon;
