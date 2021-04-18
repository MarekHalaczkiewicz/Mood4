import { useState } from "react";
import SuggestionButtons from "./SugestionButtons";
import { MovieData, DrinkData, MusicData } from "./CarouselData";
import "./Carousel.css";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

const Carousel = () => {
  const [interests, setInterests] = useState([
    { value: "Movie", toggled: true },
    { value: "Music", toggled: false },
    { value: "Drink", toggled: false },
  ]);
  const [current, setCurrent] = useState(0);
  const [carouselImages, setCarouselImages] = useState([
    MovieData,
    MusicData,
    DrinkData,
  ]);
  const [activeCarouselImages, setActiveCarouselImages] = useState(MovieData);
  const toggleActive = (name) => {
    interests.forEach((button) => {
      return (button.toggled = false);
    });
    const clickedIndex = interests.findIndex((button) => {
      return name === button.value;
    });
    const newInterests = [...interests];
    newInterests[clickedIndex].toggled = true;
    setInterests(newInterests);
    const selectedActiveCarousel = carouselImages[clickedIndex];
    setActiveCarouselImages(selectedActiveCarousel);
  };

  const length = carouselImages.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <SuggestionButtons interests={interests} toggleActive={toggleActive} />
      <div className="slider">
        <img
          className="left-arrow"
          src={leftArrow}
          alt="left-arrow"
          onClick={prevSlide}
        />

        {activeCarouselImages.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="Movie image"
                  className="carousel-img centering"
                />
              )}
            </div>
          );
        })}
        <img
          className="right-arrow"
          src={rightArrow}
          alt="right-arrow"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};

export default Carousel;
