import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useThemeContext } from "../../../theme/ThemeContextProvider";

function ContactUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { direction } = useThemeContext();

  return (
    <Box
      component="section"
      id="contact"
      ref={ref}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey.900",
        color: "grey.100",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            צור קשר
          </Typography>
        </motion.div>
        <motion.div
          dir={direction}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h6" align="center" color="grey.400">
            יש לך שאלות? אנחנו כאן לעזור. מלא את הטופס ונחזור אליך בהקדם.
          </Typography>
        </motion.div>
        <Box component="form" noValidate autoComplete="off" mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TextField
                  dir={direction}
                  fullWidth
                  label="שם מלא"
                  variant="filled"
                  required
                  sx={{
                    borderRadius: 2,
                    bgcolor: "grey.800",
                    input: { color: "grey.100" },
                    label: { color: "grey.100" },
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TextField
                  dir={direction}
                  fullWidth
                  label="אימייל"
                  variant="filled"
                  required
                  type="email"
                  sx={{
                    borderRadius: 2,
                    bgcolor: "grey.800",
                    input: { color: "grey.100" },
                    label: { color: "grey.100" },
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <TextField
                  dir={direction}
                  fullWidth
                  label="הודעה"
                  variant="filled"
                  required
                  multiline
                  rows={4}
                  sx={{
                    borderRadius: 2,
                    bgcolor: "grey.800",
                    textarea: { color: "grey.50" },
                    label: { color: "grey.50" },
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  שלח הודעה
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
