import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Navigation from "./Navigation";
import Rules from "./Rules";
import AppLayout from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route index path="/rules" element={<Rules />} />
        <Route path="/app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
