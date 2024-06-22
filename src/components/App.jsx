import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AppLayout from "../pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
