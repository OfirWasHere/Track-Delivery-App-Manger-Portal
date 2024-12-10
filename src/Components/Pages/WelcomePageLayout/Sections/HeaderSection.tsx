import React, { useRef } from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { motion, useInView } from "framer-motion";

interface HeaderSectionProps {
  moveToSection?: (sectionIndex: number) => void;
}

function HeaderSection({ moveToSection }: HeaderSectionProps): JSX.Element {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      component="section"
      id="home"
      ref={ref}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        textAlign: "right",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" color="grey.200" gutterBottom fontWeight="bold">
            נהל את צי הנהגים שלך בקלות
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h5" color="grey.300" gutterBottom>
            האפליקציה שלנו עוזרת לך לסדר בקלות את ההובלות שלך, לערוך להוציא ועוד
          </Typography>
        </motion.div>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
          mt={4}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => moveToSection(1)}
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.grey[200],
                }
              }}
            >
              פרטים נוספים
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={() => moveToSection(2)}
              sx={{
                borderColor: "white",
                color: "white",
                '&:hover': {
                  borderColor: theme.palette.grey[200],
                  color: theme.palette.grey[200],
                }
              }}
            >
              הרשמה
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default HeaderSection;

