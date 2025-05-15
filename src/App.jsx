import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import Navbar from "./components/Navbar.jsx";
import { MovieProvider } from "./contexts/MovieContext.jsx";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
