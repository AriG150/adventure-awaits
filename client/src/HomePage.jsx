import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return ( 
    <div className="App">
      <h1>Adventure Awaits</h1>
      <p>
        Adventure Awaits is an online app that is designed as a one-stop-shop while creating your dream bucket list. 
        Choose from any of 14 detailed categories to begin making yours lists. Upon completing your adventure, upload
        photos and notes of the accomplishment so you'll never forget the fantastic day. 
        From Art, to Fitness, to Food, and Travel, Adventure Awaits' got you covered. 
      </p>
      <div>
        <Link to="/profile"> Your Profile </Link>  <br /> 
        <Link to="/listitem/new"> Create A New Adventure </Link>
      </div>
    </div>
  );
}
