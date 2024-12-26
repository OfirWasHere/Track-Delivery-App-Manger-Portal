import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";

// interface FTextFieldProps extends TextFieldProps {
//   testStyling: string;
// }

function FTextField({ ...props }: TextFieldProps) {
  const { direction } = useThemeContext();

  return (
    <div>
      <TextField
        sx={{
          borderRadius: 2,
          bgcolor: "grey.800",
          input: { color: "grey.100" },
          label: { color: "grey.100" },
        }}
        slotProps={{
          inputLabel: {
            sx: {
              textAlign: direction === "ltr" ? "left" : "right",
              right: direction === "ltr" ? "auto" : 30,
              left: direction === "rtl" ? "auto" : 20,
            },
          },
        }}
        {...props}
      />
    </div>
  );
}

export default FTextField;
