"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "../theme/ThemeContextProvider";
import useAuth from "../Services/useAuth";

export default function LoginModal({
  open = false,
  onClose = () => {},
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { direction } = useThemeContext();
  const { firebaseLogin, loader } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firebaseLogin({ email, password });
    // Optionally close the modal on successful login
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
            overflow: "hidden",
          }}
        >
          {loader && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
              }}
            >
              <CircularProgress color="primary" />
            </Box>
          )}

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
            disabled={loader}
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
            disabled={loader}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            disabled={loader}
          >
            המשך
          </Button>
          <Typography
            textAlign={direction === "rtl" ? "right" : "left"}
            sx={{ mt: 1 }}
          >
            אין לך משתמש? הירשם
          </Typography>
          <Typography sx={{ my: 1, textAlign: "center" }}>
            --------- OR ---------
          </Typography>
          <Button variant="outlined" fullWidth disabled={loader}>
            המשך עם גוגל
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
