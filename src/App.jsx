import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/nav";

function App() {
  const [count, setCount] = useState(0);
  //state for navbar dropdowns -----//
  const [showBurger, setShowBurger] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  // ------------------------------//

  return (
    <div className="App m-10">
      <Navbar
        burger={showBurger}
        feature={showFeatures}
        company={showCompany}
      />
      <h2 className="text-3xl underline font-header">Hello world</h2>
    </div>
  );
}

export default App;
