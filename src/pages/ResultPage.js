import { MovieData } from "../components/CarouselData";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";

const ResultPage = () => {
  const [tokenSpotify, setTokenSpotify] = useState(null);
  const [spotifyData, setSpotifyData] = useState([]);
  const [cocktailData, setCoctailData] = useState([]);
  const [movieData] = useState(MovieData);
  const spotify = {
    ClientId: "1453030ebed0443a8ac7ed202f4b3a15",
    ClientSecret: "cf930bd9cca045c6bd3be556c8ae0d80",
  };
  useEffect(() => {
    const cocktail = [];
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => cocktail.push(data.drinks[0]));
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => cocktail.push(data.drinks[0]));
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => cocktail.push(data.drinks[0]));
    setCoctailData(cocktail);
    fetch("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      body: "grant_type=client_credentials",
      method: "POST",
    })
      .then((response) => response.json())
      .then((tokenResponse) => setTokenSpotify(tokenResponse.access_token));
  }, []);
  useEffect(() => {
    if (tokenSpotify !== null) {
      fetch(
        "https://api.spotify.com/v1/recommendations?limit=3&market=US&seed_genres=pop&min_energy=0.4&min_popularity=50",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + tokenSpotify,
          },
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => setSpotifyData(data.tracks));
    }
  }, [tokenSpotify]);

  return (
    <Carousel
      movieData={movieData}
      cocktailData={cocktailData}
      spotifyData={spotifyData}
    />
  );
};

export default ResultPage;
