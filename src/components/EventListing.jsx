import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import EventCard from './EventCard';
import eventsData from '../events.json';

const EventListing = () => {
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData.events);
  }, []);

  // Categorize events into 'today', 'thisWeek', and 'upcoming'
  const categorizeEvents = () => {
    const today = new Date();
    const lastDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    const eventCategories = {
      today: [],
      thisWeek: [],
      upcoming: [],
    };

    // Iterate through events and categorize based on date
    events.forEach((event) => {
      const eventDate = new Date(event.dateTime);

      if (isToday(eventDate, today)) {
        eventCategories.today.push(event);
      } else if (isThisWeek(eventDate, lastDayOfWeek)) {
        eventCategories.thisWeek.push(event);
      } else if (isUpcoming(eventDate, today)) {
        eventCategories.upcoming.push(event);
      }
    });

    return eventCategories;
  };

  // Destructure categorized events
  const { today, thisWeek, upcoming } = categorizeEvents();

  return (
    <Container>

      {[today, thisWeek, upcoming].map((eventList, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} sx={{ mt: index !== 0 ? 3 : 0 }}>
        
          <Typography variant="h4" sx={titleStyles}>
            {index === 0 ? 'Today' : index === 1 ? 'This Week' : 'Upcoming'}
          </Typography>
          <div style={scrollContainerStyles}>
            <Grid container spacing={5} style={gridContainerStyles}>
              {/* Render EventCard for each event in the list  */}
              {eventList.map((event) => (
                <Grid item key={event.id} xs={20} sm={10} md={10} style={gridItemStyles}>
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      ))}
    </Container>
  );
};
const titleStyles = {
  mb: 2,
  color: 'black',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '24px',
};

const scrollContainerStyles = {
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  display: 'flex',
  scrollbarWidth: 'thin',
  WebkitOverflowScrolling: 'touch',
  '&::-webkit-scrollbar': {
    width: 0,
  },
  msOverflowStyle: 'none',
};

const gridContainerStyles = {
  flexWrap: 'nowrap',
};

const gridItemStyles = {
  flex: '0 0 auto',
};

// Helper functions to check date conditions
const isToday = (date, today) =>
  date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

const isThisWeek = (date, lastDayOfWeek) => date <= lastDayOfWeek;

const isUpcoming = (date, today) => date > today;

export default EventListing;
