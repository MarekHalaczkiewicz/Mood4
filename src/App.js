import Homepage from "./pages/Homepage";
import Carousel from "./components/Carousel";
import SuggestionButtons from "./components/SugestionButtons";
import logo from "./assets/Logo.svg";

const App = () => {
  return (
    <>
      <img className="logo centering" src={logo} alt="logo" />
      {/* <Homepage /> */}
      <Carousel />
    </>
  );
};
export default App;
