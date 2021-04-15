import "./Homepage.css";
import icons from "../assets/Icons.svg";

const Homepage = () => {
  return (
    <>
      <img className="centering" src={icons} alt="icons" />
      <p className="welcome-text">
        We're here to help you to feel the way you would like to feel. Just tell
        us a little bit more about yourself, and get the perfect recommendation
        based on your mood!
      </p>
      <button className="btn centering">Let's Start</button>
    </>
  );
};

export default Homepage;
