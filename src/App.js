import { useState, useEffect } from 'react';
import Map from './components/Map'
import Header from './components/Header';
import Loader from './components/Loader';
import { Stack } from '@mui/material';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState({})

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  return (
      <Stack>
        <Header setCoordinates={setCoordinates}/>
        {
          !loading ? <Map eventData={eventData} coordinates={coordinates} /> : <Loader />
        }
        {/* <Map /> */}
      </Stack>

  );
}

export default App;
