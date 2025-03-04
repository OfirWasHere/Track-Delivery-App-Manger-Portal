import { Box, Container, Typography } from "@mui/material";

function HeaderSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          נהל את צי הנהגים שלך בקלות
        </Typography>
        <Typography variant="h5" gutterBottom>
          נהלו את צי הנהגים שלכם בקלות עם onTrack! עדכנו פרטים, עקבו אחר הובלות,
          רשמו אירועים, הוציאו דוחות בלחיצת כפתור, וקשרו את הנתונים ישירות לרואה
          החשבון במהירות. מערכת חכמה, אינטואיטיבית ויעילה שתעשה לכם סדר בניהול
          העסק.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeaderSection;
