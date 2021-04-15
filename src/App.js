import Homepage from "./components/Homepage/Homepage";
import logo from "./assets/Logo.svg";

const App = () => {
  return (
    <>
      <img className="logo centering" src={logo} alt="logo" />
      <Homepage />
    </>
  );
};
export default App;
