import React, { useState } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="app">
      <h1>Tour Comparison App</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </div>
  );
}

export default App;
// fixed issues with the TourCard component and Gallery component
// added error handling and loading states