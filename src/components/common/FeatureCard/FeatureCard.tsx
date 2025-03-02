import React from 'react'
import { Card, CardHeader, CardContent, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/system'

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}))

const IconWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}))

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const theme = useTheme()

  return (
    <StyledCard elevation={2}>
      <CardHeader
        avatar={<IconWrapper>{icon}</IconWrapper>}
        title={<Typography variant="h6" component="h3">{title}</Typography>}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color={"grey.900"}>
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

