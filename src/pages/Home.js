import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { ANIME_API_URL } from '../config';

const Home = () => {

  const [newAnime, setNewAnime] = useState([]);
  const [loadingAnime, setLoadingAnime] = useState(true);
  const [animeError, setAnimeError] = useState(false);

  const loadAnime = () => {
  return new Promise((resolve, reject) => {

    const callbackName =
      `animeCallback_${Date.now()}`;

    window[callbackName] = (data) => {

      delete window[callbackName];

      script.remove();

      resolve(data);
    };

    const script =
      document.createElement('script');

    script.src =
      `${ANIME_API_URL}?action=getAnime&callback=${callbackName}`;

    script.onerror = () => {

      delete window[callbackName];

      script.remove();

      reject(new Error('Failed to load anime'));
    };

    document.body.appendChild(script);
  });
};

 useEffect(() => {

  const loadAnime = () => {

    return new Promise((resolve, reject) => {

      const callbackName =
        `animeCallback_${Date.now()}`;

      const script =
        document.createElement('script');

      window[callbackName] = (data) => {

        delete window[callbackName];

        script.remove();

        resolve(data);
      };

      script.src =
        `${ANIME_API_URL}?action=getAnime&callback=${callbackName}`;

      script.onerror = () => {

        delete window[callbackName];

        script.remove();

        reject(new Error('Failed to load anime'));
      };

      document.body.appendChild(script);
    });
  };


  loadAnime()
    .then(data => {
  console.log('Anime data from Google Sheets:', data);

  if (Array.isArray(data)) {
    setNewAnime(data);
  } else {
    console.error('Expected an array but received:', data);
    setAnimeError(true);
  }

  setLoadingAnime(false);
})
    .catch(error => {

      console.error('Error loading anime:', error);

      setAnimeError(true);
      setLoadingAnime(false);

    });

}, []);

  return (
    <div className="container">
      <div className="background-animation-home"></div> {/* animated background */}

      <div className="card-container">
     



                {/* ===================================== */}
        {/* NEW ANIME FROM GOOGLE SHEETS */}
        {/* ===================================== */}

        {loadingAnime && (
          <Card className="custom-card">
            <CardTitle tag="h2">
              Loading new anime...
            </CardTitle>
          </Card>
        )}

        {animeError && (
          <Card className="custom-card">
            <CardTitle tag="h2">
              Unable to load new anime.
            </CardTitle>
            <CardText>
              Please try again later.
            </CardText>
          </Card>
        )}

        {newAnime.map((anime) => (
          <Card className="custom-card" key={anime.id}>

            <CardTitle tag="h1">
              {anime.title}
            </CardTitle>

            <img
              src={anime.imageUrl}
              alt={anime.title}
            />

            {anime.description && (
              <CardText>
                {anime.description}
              </CardText>
            )}

          </Card>
        ))}

      </div>
    </div>
  );
}

export default Home;
