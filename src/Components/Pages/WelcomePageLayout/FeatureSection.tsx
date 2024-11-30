import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { Truck, ClipboardList, BarChart3, Users } from 'lucide-react'
import FeatureCard from '../../common/FeatureCard'

const FeatureContainer = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(12, 0),
}))

export default function FeatureSection() {
  const features = [
    {
      icon: <Truck size={40} />,
      title: "Fleet Management",
      description: "Efficiently manage and track your entire fleet of trucks in real-time."
    },
    {
      icon: <ClipboardList size={40} />,
      title: "Delivery Logging",
      description: "Easily log and manage deliveries with our intuitive interface."
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Performance Analytics",
      description: "Gain insights into your operations with comprehensive analytics and reporting."
    },
    {
      icon: <Users size={40} />,
      title: "Team Collaboration",
      description: "Improve communication and coordination among your team members."
    }
  ]

  return (
    <FeatureContainer id="features">
      <Container>
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 8, fontSize: { xs: '2rem', sm: '3rem' } }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </FeatureContainer>
  )
}

