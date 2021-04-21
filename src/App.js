import Homepage from "./pages/Homepage";
import ResultPage from "./pages/ResultPage";
import logo from "./assets/Logo.svg";
import AddThisButton from "./components/AddThisButton";
import FooterSuggestions from "./components/FooterSuggestions";

const App = () => {
  return (
    <>
      <img className="logo centering" src={logo} alt="logo" />
      {/* <Homepage /> */}
      <ResultPage />
      <AddThisButton />
      <FooterSuggestions />
    </>
  );
};
export default App;
