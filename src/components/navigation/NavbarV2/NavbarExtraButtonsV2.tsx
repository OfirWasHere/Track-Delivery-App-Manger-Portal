import { Box, Button, Typography } from "@mui/material";
import React from "react";

type NavbarExtraButtonsPropsV2 = {
  buttonText: string;
  buttonClickAction: () => void;
};

function NavbarExtraButtonsV2({
  buttonText,
  buttonClickAction,
}: NavbarExtraButtonsPropsV2) {
  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{
          bgcolor: "#212121",
          color: "#fff",
          "&:hover": {
            bgcolor: "#424242",
          },
        }}
        onClick={buttonClickAction}
      >
        <Typography variant="h6">{buttonText}</Typography>
      </Button>
    </Box>
  );
}

export default NavbarExtraButtonsV2;
