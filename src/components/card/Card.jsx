import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

function Card({ eventId }) {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    // API'den veri çekme işlemi
    const fetchEventData = async () => {
      try {
        const response = await fetch(`https://api.example.com/events/${eventId}`);
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventId]);

  // Etkinlik verisi yüklenene kadar bir yükleme göstergesi göster
  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={eventData.image}
          alt={eventData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {eventData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eventData.date}
          </Typography>
          <Typography variant="body1">
            {eventData.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Bilet Al
        </Button>
      </CardActions>
    </Card>
  );
}

export default Card;
