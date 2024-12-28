import React, { useRef } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { LocalShipping, PeopleAlt, BarChart } from "@mui/icons-material";
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      title: "ניהול צי רכב",
      description:
        "נהל את כל כלי הרכב שלך במקום אחד, עם מעקב אחר תחזוקה ויעילות.",
    },
    {
      icon: <PeopleAlt sx={{ fontSize: 40 }} />,
      title: "ניהול נהגים",
      description: "עקוב אחר זמני עבודה, ביצועים ומשימות של הנהגים שלך בקלות.",
    },
    {
      icon: <BarChart sx={{ fontSize: 40 }} />,
      title: "ניתוח נתונים",
      description: "קבל תובנות מעמיקות על ביצועי הצי שלך עם כלי ניתוח מתקדמים.",
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      ref={ref}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey.100",
        color: "text.primary",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
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
            color="primary"
          >
            קצת עלינו
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            align="center"
            paragraph
            color="text.secondary"
          >
            אנחנו מספקים פתרונות מתקדמים לניהול צי רכב, המותאמים במיוחד לצרכים
            שלך
          </Typography>
        </motion.div>
        <Grid container spacing={4} mt={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box color="primary.main" mb={2}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
