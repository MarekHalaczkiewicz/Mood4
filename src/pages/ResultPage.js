import { MovieData, MusicData } from "../components/CarouselData";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import AddThisButton from "../components/AddThisButton";
import FooterSuggestions from "../components/FooterSuggestions";

const ResultPage = () => {
  const [cocktailData, setCoctailData] = useState([]);
  const [musicData] = useState(MusicData);
  const [movieData] = useState(MovieData);
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
  }, []);
  return (
    <>
      <Carousel
        movieData={movieData}
        cocktailData={cocktailData}
        musicData={musicData}
      />
      <AddThisButton />
      <FooterSuggestions />
    </>
  );
};

export default ResultPage;
