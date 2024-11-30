import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" align="center">
            &copy; כל הזכויות שמורות אופיר דורון 2024.
          </Typography>
          <Box>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
}
