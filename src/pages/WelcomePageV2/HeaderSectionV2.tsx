import { Box, Button, Container, Typography } from "@mui/material";

function HeaderSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        background: "rgba(16, 144, 203, 0.1)",
      }}
    >
      <Container>
        <Box sx={{ border: 2, borderColor: "#d32f2f" }}>
          <Typography variant="h2" gutterBottom>
            נהל את צי הנהגים שלך בקלות
          </Typography>
          <Typography variant="h5" gutterBottom>
            שדרג את ניהול עסק ההובלות שלך עם המערכת החכמה שלנו – הוספת ועריכת
            משלוחים, ניהול נהגים ורכבים, מעקב אחר סטטוס הובלות, תיעוד מפורט ועוד
            – הכל במקום אחד, בצורה פשוטה, חכמה ויעילה.
          </Typography>
          <Box display="flex" gap="20px" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="info"
              sx={{ borderRadius: "8px" }}
            >
              <Typography sx={{ fontSize: 24, padding: "4px" }}>
                הרשמה
              </Typography>
            </Button>
            <Button variant="outlined" sx={{ borderRadius: "8px" }}>
              <Typography sx={{ fontSize: 24 }}>פרטים נוספים</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeaderSection;
