import styles from "./App.module.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Home } from "./components/Home";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
  return (
    <Router>
      <header>
        <h1 className={styles.title}>🎞️ Movies <span>React</span> 🎞️</h1>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/movies" element={<LandingPage/>}></Route>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}></Route>
        </Routes>
      </main>
    </Router>
  );
}
