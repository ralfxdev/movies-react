import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
//import movies from "../movies";

export function MoviesGrid() {

  const [movies, setMovies] = useState([]);

  //Use Efect to fetch movies from API
  useEffect(() => {
    get("/discover/movie").then(data => { //data is the response from the API
      setMovies(data.results);
    });
  }, []); //[empty array] the request will only be repeated once
  
  return (
    <ul className={styles.moviesGrid}>
      {/*Para cada objeto, llamamos a la funcion MovieCard*/}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
