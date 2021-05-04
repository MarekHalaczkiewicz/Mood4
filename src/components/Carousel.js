import { useState } from "react";
import "./Carousel.css";
import { FaStar } from "react-icons/fa";
import leftArrow from "../assets/left-arrow2.svg";
import rightArrow from "../assets/right-arrow2.svg";

const Carousel = ({
  movieData,
  cocktailData,
  spotifyData,
  status,
  current,
  setCurrent,
}) => {
  const [imageClicked, setImageClicked] = useState(false);
  const length = 3;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <div className="slider">
        <img
          className="left-arrow"
          src={leftArrow}
          alt="left-arrow"
          onClick={prevSlide}
        />
        <div
          className={
            imageClicked ? "more-info more-info-deactive" : "more-info"
          }
        >
          Click for more info
        </div>
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
                    <div className="strDrink">
                      <h3>"{slide.strDrink}"</h3>
                    </div>
                    <h5>ingredients:</h5>
                    <div className="ingredients-container">
                      <div className="ingredients">
                        {Object.values(slide)
                          .slice(17, 32)
                          .map((strEl, index) => {
                            return (
                              strEl !== null && <div key={index}>{strEl}</div>
                            );
                          })}
                      </div>
                      <div className="meausures">
                        {Object.values(slide)
                          .slice(32, 47)
                          .map((strEl, index) => {
                            return (
                              strEl !== null && <div key={index}>{strEl}</div>
                            );
                          })}
                      </div>
                    </div>

                    <div className="strInstructions">
                      <p>{slide.strInstructions}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : status === 0
          ? movieData.map((slide, index) => {
              return (
                <div
                  onClick={() => setImageClicked(!imageClicked)}
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`}
                      alt="Movie"
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
                    <h3>"{slide.original_title}"</h3>
                    <h5>Release Date: {slide.release_date}</h5>

                    <p>{slide.overview}</p>
                    <h5>
                      <FaStar className="vote-star" size={20} />
                      <br></br>
                      {slide.vote_average}/10
                    </h5>
                  </div>
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
                    <h3>
                      "{slide.name}" by
                      {slide.artists.map((artist, index) => {
                        return <div key={index}>{artist.name}</div>;
                      })}
                    </h3>
                    <figure>
                      <audio controls src={slide.preview_url}></audio>
                    </figure>

                    <div className="gotoTrack">
                      Go to the{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={slide.external_urls.spotify}
                      >
                        track!
                      </a>
                    </div>
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
