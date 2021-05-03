import UserContext from "../context/ContextProvider";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import SuggestionButtons from "../components/SugestionButtons";
import "./ResultPage.css";

const ResultPage = ({ myPreferences }) => {
  const context = useContext(UserContext);
  const [tokenSpotify, setTokenSpotify] = useState(null);
  const [spotifyData, setSpotifyData] = useState([]);
  const [cocktailData, setCoctailData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [status, setStatus] = useState(0);
  const [current, setCurrent] = useState(0);
  const [giveMeMore, setGiveMeMore] = useState(true);
  const spotify = {
    ClientId: "1453030ebed0443a8ac7ed202f4b3a15",
    ClientSecret: "cf930bd9cca045c6bd3be556c8ae0d80",
  };
  const [interests, setInterests] = useState([
    { id: 0, value: "Movie", toggled: true },
    { id: 1, value: "Music", toggled: false },
    { id: 2, value: "Drink", toggled: false },
  ]);
  const toggleActive = (id) => {
    const newInterests = interests.map((interest) => {
      if (interest.id === id) {
        return { ...interest, toggled: true };
      } else {
        return { ...interest, toggled: false };
      }
    });
    setInterests(newInterests);
    setStatus(id);
  };

  useEffect(() => {
    const randomNumber2 = Math.floor(Math.random() * 18);
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=6a389bac75b5a8fdfcfc2e5f478b8c62&sort_by=vote_count.desc&page=${randomNumber}&with_genres=${context.questionState.question1}`
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data.results.slice(randomNumber2)));
  }, [context.questionState.question1, giveMeMore]);

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
  }, [giveMeMore]);
  useEffect(() => {
    if (tokenSpotify !== null) {
      fetch(
        `https://api.spotify.com/v1/recommendations?limit=3&market=US&seed_genres=${context.questionState.question3.genre}&min_danceability=${context.questionState.question3.dance}&min_energy=${context.questionState.question3.energy}&min_popularity=50`,
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
  }, [tokenSpotify, giveMeMore]);
  const handleMyPreferences = () => {
    if (status === 0) {
      myPreferences.movie = `https://image.tmdb.org/t/p/original/${movieData[current].poster_path}`;
    } else if (status === 1) {
      myPreferences.music = spotifyData[current].album.images[0].url;
    } else if (status === 2) {
      myPreferences.drink = cocktailData[current].strDrinkThumb;
    }
  };
  return (
    <>
      <button className="question-button">Your answers guided us to...</button>
      <SuggestionButtons interests={interests} toggleActive={toggleActive} />
      <Carousel
        movieData={movieData}
        cocktailData={cocktailData}
        spotifyData={spotifyData}
        status={status}
        current={current}
        setCurrent={setCurrent}
      />
      <button onClick={() => handleMyPreferences()} className="add-button">
        Choose This!
      </button>
      <div className="suggestion-footer">
        <button
          onClick={() => setGiveMeMore(!giveMeMore)}
          className="suggestion-footer-btn"
        >
          More options
        </button>

        <Link to="/FinalPage">
          <button className="suggestion-footer-btn">I'm done</button>
        </Link>
      </div>
    </>
  );
};

export default ResultPage;
