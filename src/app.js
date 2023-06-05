import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'daisyui/dist/full.css'; // Import DaisyUI styles
import Card from './components/Card/Card';
import apiInstance from './services/api';

function App() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const data = await apiInstance.getAllAnime();
        setAnimeData(data);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Anime List</h1>
      <div className="grid grid-cols-3 gap-4">
        {animeData.map((anime) => (
          <Card key={anime.animeid} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default App;
