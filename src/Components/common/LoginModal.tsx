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

function LoginModal({
  open = false,
  onClose = () => {},
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Button variant="contained" type="submit" fullWidth>
            המשך
          </Button>
          <Typography>אין לך משתמש? הירשם</Typography>
          <Typography>--------- OR ----------</Typography>
          <Typography>Continue with google</Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginModal;

// <Typography id="login-modal-title" variant="h6" component="h2">
// Login
// </Typography>
// <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
// <TextField
//   margin="normal"
//   required
//   fullWidth
//   id="email"
//   label="Email Address"
//   name="email"
//   autoComplete="email"
//   autoFocus
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />
// <TextField
//   margin="normal"
//   required
//   fullWidth
//   name="password"
//   label="Password"
//   type="password"
//   id="password"
//   autoComplete="current-password"
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
// />
// <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
//   <Button onClick={onClose} sx={{ mr: 1 }}>
//     Cancel
//   </Button>
//   <Button type="submit" variant="contained">
//     Login
//   </Button>
// </Box>
