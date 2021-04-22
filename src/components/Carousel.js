import { useState } from "react";
import SuggestionButtons from "./SugestionButtons";
import "./Carousel.css";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

const Carousel = ({ movieData, cocktailData, spotifyData }) => {
  const [imageClicked, setImageClicked] = useState(false);

  const [status, setStatus] = useState(0);
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
  const [current, setCurrent] = useState(0);
  const length = 3;

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

        {status === 2
          ? cocktailData.map((slide, index) => {
              return (
                <div
                  onClick={() => setImageClicked(!imageClicked)}
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.strDrinkThumb}
                      alt="Drink"
                      className={
                        imageClicked
                          ? "carousel-img carousel-img-deactive"
                          : "carousel-img"
                      }
                    />
                  )}
                  <div
                    className={
                      imageClicked
                        ? "carousel-over carousel-over-active"
                        : "carousel-over"
                    }
                  >
                    <h3>{slide.strDrink}</h3>

                    <p>{slide.strInstructions}</p>
                  </div>
                </div>
              );
            })
          : status === 0
          ? movieData.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.image}
                      alt="Movie"
                      className="carousel-img"
                    />
                  )}
                </div>
              );
            })
          : status === 1
          ? spotifyData.map((slide, index) => {
              return (
                <div
                  onClick={() => setImageClicked(!imageClicked)}
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.album.images[0].url}
                      alt="Music"
                      className={
                        imageClicked
                          ? "carousel-img carousel-img-deactive"
                          : "carousel-img"
                      }
                    />
                  )}
                  <div
                    className={
                      imageClicked
                        ? "carousel-over carousel-over-active"
                        : "carousel-over"
                    }
                  >
                    <h3>{slide.name}</h3>
                    {console.log(slide)}

                    <p>
                      Go to the{" "}
                      <a target="_blank" href={slide.external_urls.spotify}>
                        track!
                      </a>
                    </p>
                  </div>
                </div>
              );
            })
          : null}
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
