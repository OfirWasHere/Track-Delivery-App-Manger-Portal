"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "../theme/ThemeContextProvider";

function LoginModal({
  open = false,
  onClose = () => {},
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { direction } = useThemeContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { email, password });
    // You would typically send these credentials to your authentication service here
    // onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            textAlign: direction === "rtl" ? "right" : "left",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 10,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography>התחברות</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="איימל"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            המשך
          </Button>
          <Typography sx={{ mt: 1 }}>אין לך משתמש? הירשם</Typography>
          <Typography sx={{ my: 1, textAlign: "center" }}>
            --------- OR ---------
          </Typography>
          <Button variant="outlined" fullWidth>
            המשך עם גוגל
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginModal;
