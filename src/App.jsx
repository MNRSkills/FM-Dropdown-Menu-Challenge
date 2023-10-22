import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/nav";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);
  //state for navbar dropdowns -----//
  const [showBurger, setShowBurger] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  // ------------------------------//

  //functions for navbar dropdowns -----//
  function handleBurger() {
    setShowBurger(!showBurger);
    // console.log("hello");
  }
  function handleFeature() {
    setShowFeatures(!showFeatures);
    // console.log("Features");
  }
  function handleCompany() {
    setShowCompany(!showCompany);
    // console.log("Company");
  } // ------------------------------//
  return (
    <div className="App m-0 p-0">
      <Navbar
        handleBurger={handleBurger}
        handleFeature={handleFeature}
        handleCompany={handleCompany}
        burger={showBurger}
        feature={showFeatures}
        company={showCompany}
      />
      <h2 className="text-3xl underline font-header">Hello world</h2>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
