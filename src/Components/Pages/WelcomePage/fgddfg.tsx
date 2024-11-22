"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { Truck, ClipboardList, BarChart3, Users } from "lucide-react";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#F0F4F8",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
});

const NavLink = styled(Link)({
  color: "#4B5563",
  textDecoration: "none",
  "&:hover": {
    color: "#2563EB",
  },
});

const HeroSection = styled("section")({
  padding: "64px 0",
  textAlign: "center",
  backgroundColor: "#E2E8F0",
});

const FeatureSection = styled("section")({
  backgroundColor: "white",
  padding: "64px 0",
  color: "#1E293B",
});

const Footer = styled("footer")({
  backgroundColor: "#2D3748",
  color: "white",
  padding: "32px 0",
});

const IconWrapper = styled("div")({
  marginBottom: "8px",
});

export default function LandingPage() {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <Truck size={32} color="#2563EB" style={{ marginRight: 16 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#1F2937" }}
          >
            Fox Delivery's
          </Typography>
          <NavLink href="#features" sx={{ marginRight: 2 }}>
            Features
          </NavLink>
          <NavLink href="#about" sx={{ marginRight: 2 }}>
            About
          </NavLink>
          <NavLink href="#contact" sx={{ marginRight: 2 }}>
            Contact
          </NavLink>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              color: "white",
              "&:hover": { backgroundColor: "#333333" },
            }}
          >
            Log In
          </Button>
        </Toolbar>
      </StyledAppBar>

      <main>
        <HeroSection>
          <Container>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#111827" }}
            >
              Manage Your Fleet with Ease
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#4B5563",
                maxWidth: "600px",
                margin: "0 auto 32px",
              }}
            >
              Fox Delivery's helps businesses streamline their delivery
              operations, track performance, and boost efficiency.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                marginRight: 2,
                backgroundColor: "#000000",
                color: "white",
                "&:hover": { backgroundColor: "#333333" },
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
              }}
            >
              Request Demo
            </Button>
          </Container>
        </HeroSection>

        <FeatureSection id="features">
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
              }}
            >
              Key Features
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <FeatureCard
                  icon={<Truck size={40} color="#2563EB" />}
                  title="Fleet Management"
                  description="Efficiently manage and track your entire fleet of trucks in real-time."
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FeatureCard
                  icon={<ClipboardList size={40} color="#2563EB" />}
                  title="Delivery Logging"
                  description="Easily log and manage deliveries with our intuitive interface."
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FeatureCard
                  icon={<BarChart3 size={40} color="#2563EB" />}
                  title="Performance Analytics"
                  description="Gain insights into your operations with comprehensive analytics and reporting."
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FeatureCard
                  icon={<Users size={40} color="#2563EB" />}
                  title="Team Collaboration"
                  description="Improve communication and coordination among your team members."
                />
              </Grid>
            </Grid>
          </Container>
        </FeatureSection>
      </main>

      <Footer>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2023 Fox Delivery's. All rights reserved.
          </Typography>
        </Container>
      </Footer>
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
        avatar={<IconWrapper>{icon}</IconWrapper>}
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
