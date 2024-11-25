import React from "react";
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  useTheme,
} from "@mui/material";
import { Grid2 } from "@mui/material";
import { Box } from "@mui/system";
import { Truck, ClipboardList, BarChart3, Users, MenuIcon } from "lucide-react";
import Navbar from "../../common/Navbar/Navbar";

export default function Main() {
  const theme = useTheme();

  return (
    <div>
      <Navbar />
      <main>
        <Box py={8} textAlign={"center"} bgcolor={"#E2E8F0"}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: { xs: "2.5rem", sm: "3.75rem" },
              }}
            >
              Manage Your Fleet with Ease
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#4B5563",
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                mb: 4,
              }}
            >
              Fox Delivery's helps businesses streamline their delivery
              operations, track performance, and boost efficiency.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                marginRight: { xs: 0, sm: 2 },
                marginBottom: { xs: 2, sm: 0 },
                backgroundColor: "#000000",
                color: "white",
                "&:hover": { backgroundColor: "#333333" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "white",
                color: "#1E293B",
                "&:hover": { backgroundColor: "#E2E8F0" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Request Demo
            </Button>
          </Container>
        </Box>

        <Box bgcolor={"white"} py={8} color={"1E293B"}>
          <Container>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                textAlign: "center",
                marginBottom: "48px",
                fontWeight: "bold",
                color: "#1E293B",
                fontSize: { xs: "2rem", sm: "3rem" },
              }}
            >
              Key Features
            </Typography>
            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <FeatureCard
                  icon={<Truck size={40} color="#2563EB" />}
                  title="Fleet Management"
                  description="Efficiently manage and track your entire fleet of trucks in real-time."
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <FeatureCard
                  icon={<ClipboardList size={40} color="#2563EB" />}
                  title="Delivery Logging"
                  description="Easily log and manage deliveries with our intuitive interface."
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <FeatureCard
                  icon={<BarChart3 size={40} color="#2563EB" />}
                  title="Performance Analytics"
                  description="Gain insights into your operations with comprehensive analytics and reporting."
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <FeatureCard
                  icon={<Users size={40} color="#2563EB" />}
                  title="Team Collaboration"
                  description="Improve communication and coordination among your team members."
                />
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </main>

      <Box bgcolor={"#2D3748"} color={"white"} py={2}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2023 Fox Delivery's. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E2E8F0",
      }}
    >
      <CardHeader
        avatar={<Box mb={2}>{icon}</Box>}
        title={
          <Typography variant="h6" sx={{ color: "#1E293B" }}>
            {title}
          </Typography>
        }
        sx={{ backgroundColor: "#F7FAFC" }}
      />
      <CardContent sx={{ flexGrow: 1, backgroundColor: "white" }}>
        <Typography variant="body2" sx={{ color: "#4A5568" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
