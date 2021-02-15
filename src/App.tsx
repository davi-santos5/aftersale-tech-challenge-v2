import React, { memo, useEffect, useState } from 'react';

import api from './api';
import Scenery from './components/Scenery';

function App() {
  const [sunriseSunset, setSunriseSunset] = useState({sunrise: '', sunset: ''})

  //getting user location and sunrise/sunset times
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const response = await api.get(`json?lat=${lat}&lng=${lng}`);
    setSunriseSunset(response.data.results);
  })
  }, [])
  
  return (
    <Scenery sunriseSunset={sunriseSunset} />
  );
}

export default memo(App);
