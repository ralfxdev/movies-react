import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MovieGrid.module.css";

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {/*Para cada objeto, llamamos a la funcion MovieCard*/}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
