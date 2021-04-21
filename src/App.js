import Homepage from "./pages/Homepage";
import ResultPage from "./pages/ResultPage";
import logo from "./assets/Logo.svg";

const App = () => {
  return (
    <>
      <img className="logo centering" src={logo} alt="logo" />
      {/* <Homepage /> */}
      <ResultPage />
    </>
  );
};
export default App;
