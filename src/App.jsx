import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="App">
      <h1>Tour Gallery</h1>
      <div className="tour-gallery">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.name} className="tour-image" />
            <div className="tour-details">
              <h2>{tour.name}</h2>
              <p>{tour.info}</p>
              <h3>${tour.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
