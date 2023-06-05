import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'daisyui/dist/full.css'; // Import DaisyUI styles
import { Container } from './styles';

function Card({ anime, onClick = () => {} }) {
  return (
    <Container>
      <div className="card">
        <button onClick={onClick} className="card-body">
          <img
            alt={anime.title} // Use the anime name from the database as the alt attribute
            src={anime.img_url}
            className="rounded-lg"
          />
          <h2 className="text-lg font-semibold">{anime.title}</h2>
        </button>
      </div>
    </Container>
  );
}

export default Card;
