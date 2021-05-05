import "./Modal.css";
import { FaStar } from "react-icons/fa";

const Modal = ({ setShowModal, myPreferences }) => {
  return (
    <div className="modal">
      <div
        onClick={() => {
          setShowModal(false);
        }}
        className="close-modal"
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
      </div>

      <div className="modal-section">
        {myPreferences.movie.img !== "" ? (
          <>
            <h3>"{myPreferences.movie.title}"</h3>
            <p>{myPreferences.movie.overview}</p>
            <p>
              <FaStar className="vote-star" size={20} />
              <br></br>
              {myPreferences.movie.vote_average}/10
            </p>
          </>
        ) : (
          <div className="no-selection">No movie selected</div>
        )}
      </div>
      <div className="modal-section">
        {myPreferences.music.img !== "" ? (
          <>
            <h3>
              "{myPreferences.music.title}" by
              {myPreferences.music.artists.map((artist, index) => {
                return <div key={index}>{artist.name}</div>;
              })}
            </h3>
            Go to the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={myPreferences.music.track}
            >
              track!
            </a>
          </>
        ) : (
          <div className="no-selection">No music selected</div>
        )}
      </div>
      <div className="modal-section">
        {myPreferences.drink.img !== "" ? (
          <>
            <h3>{myPreferences.drink.title}</h3>
            <h4>ingredients:</h4>
            <h5>
              {myPreferences.drink.ingredients.map((strEl, index) => {
                return strEl !== null && <p key={index}>{strEl}</p>;
              })}
            </h5>
            <p>{myPreferences.drink.instructions}</p>
          </>
        ) : (
          <div className="no-selection">No drink selected</div>
        )}
      </div>
    </div>
  );
};
export default Modal;
