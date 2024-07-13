import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AppLayout from "../pages/AppLayout";
import PopUpDarken from "./PopUpDarken";
import { useSelector } from "react-redux";

function App() {
  const { activePopUp } = useSelector((store) => store.game);

  return (
    <BrowserRouter>
      {activePopUp && <PopUpDarken />}
      <Navigation />

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
