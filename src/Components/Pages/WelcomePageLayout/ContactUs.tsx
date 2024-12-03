import { Box, Typography } from '@mui/material'
import React from 'react'

function ContactUs() {
  return (
    <Box
    component="section"
    id="contact"
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "grey.700",
      color: "white",
    }}
  >
    <Box>
      <Typography variant="h3">צור קשר</Typography>
    </Box>
  </Box>
  )
}

export default ContactUs