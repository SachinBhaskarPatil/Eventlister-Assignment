import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';



const EventCard = ({ event }) => {
  const { name, dateTime, location, description, id } = event;

  return (
    <ScaledCard>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 1, color: '#333' }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: 1 }}>
          Date and Time: {dateTime}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: 1 }}>
          Location: {location}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: 1 }}>
          {description}
        </Typography>
        <Link to={`/event/${id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Details
          </Button>
        </Link>
      </CardContent>
    </ScaledCard>
  );
};
const ScaledCard = styled(Card)({
  transition: 'transform 0.2s',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});
export default EventCard;
