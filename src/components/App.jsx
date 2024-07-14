import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";

import SpinnerFullPage from "./SpinnerFullPage";
import Navigation from "./Navigation";
import { lazy, Suspense } from "react";
import Footer from "./Footer";

function App() {
  const HomePage = lazy(() => import("../pages/HomePage"));
  const AppLayout = lazy(() => import("../pages/AppLayout"));

  return (
    <BrowserRouter>
      <Navigation />

      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/app" element={<AppLayout />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
