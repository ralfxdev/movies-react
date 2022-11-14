import styles from "./App.module.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
  return (
    <Router>
      <header>
        <h1 className={styles.title}>Movies <span>React</span></h1>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}></Route>
          <Route exact path="/movie/:movieId" element={<MovieDetails/>}></Route>
        </Routes>
      </main>
    </Router>
  );
}
