import { Box, Button, Container, Typography } from "@mui/material";
import placeholderImage1 from "../../assets/placeholderimage.jpg";

function HeaderSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        background: "rgba(16, 144, 203, 0.1)",
      }}
    >
      <Box width="100%">
        <Box
          sx={{
            background: `url(${placeholderImage1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "auto",
            py: 20,
          }}
        >
          <Container>
            <Typography
              variant="h2"
              color="#fff"
              fontWeight="bold"
              gutterBottom
            >
              נהל את צי הנהגים שלך בקלות
            </Typography>

            <Typography
              variant="h5"
              color="#fff"
              fontWeight="bold"
              gutterBottom
            >
              שדרג את ניהול עסק ההובלות שלך עם המערכת החכמה שלנו – הוספת ועריכת
              משלוחים, ניהול נהגים ורכבים, מעקב אחר סטטוס הובלות, תיעוד מפורט
              ועוד – הכל במקום אחד, בצורה פשוטה, חכמה ויעילה.
            </Typography>

            <Box display="flex" gap="20px" sx={{ mt: 2 }}>
              <Button variant="contained" sx={{ borderRadius: "8px" }}>
                <Typography sx={{ fontSize: 24, padding: "4px" }}>
                  הרשמה
                </Typography>
              </Button>
              <Button variant="outlined" sx={{ borderRadius: "8px" }}>
                <Typography sx={{ fontSize: 24 }}>פרטים נוספים</Typography>
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderSection;
