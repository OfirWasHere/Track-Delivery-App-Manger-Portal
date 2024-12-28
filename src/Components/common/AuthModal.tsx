"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  IconButton,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Link,
  Grow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import { useThemeContext } from "../theme/ThemeContextProvider";
import useAuth from "../Services/useAuth";
import FTextField from "./FTextField";

export default function AuthModal({
  open = false,
  onClose = () => {},
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { direction } = useThemeContext();
  const { firebaseLogin, firebaseSignUp, loader } = useAuth();
  const [tabValue, setTabValue] = useState(0);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const changeTabValue = () => {
    tabValue === 0 ? setTabValue(1) : setTabValue(0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tabValue === 0) {
      firebaseLogin({ email, password });
    } else {
      if (agreeToTerms) {
        firebaseSignUp({ email, password });
      } else {
        // Show error message or prevent submission
        console.error("You must agree to the terms to register");
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      // dir={direction}
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
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography textAlign="center" variant="h5">
            {tabValue === 0 ? "התחברות" : "הרשמה"}
          </Typography>
          <FTextField
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
          <FTextField
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

          {tabValue === 1 ? (
            <Box dir={direction}>
              <Grow in={tabValue === 1} timeout={300}>
                <FormControlLabel
                  sx={{ m: "0" }}
                  control={
                    <Checkbox
                      value="agreeToTerms"
                      color="primary"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      disabled={loader}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      אני מסכים/ה ל
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        תנאי השימוש
                      </Link>
                    </Typography>
                  }
                />
              </Grow>
            </Box>
          ) : null}
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            disabled={loader || (tabValue === 1 && !agreeToTerms)}
          >
            {tabValue === 1 ? "הרשמה" : "התחברות"}
          </Button>
          <Box dir={direction === "ltr" ? "rtl" : "ltr"}>
            <Typography textAlign="center" sx={{ mt: 1 }}>
              <Button onClick={changeTabValue}>
                {tabValue === 1 ? "התחבר" : "הירשם"}
              </Button>
              {tabValue === 1 ? "?יש לך משתמש" : "?אין לך משתמש"}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            disabled={loader}
            sx={{ mt: 2, mb: 2 }}
          >
            המשך עם גוגל
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
