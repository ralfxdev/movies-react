//import movie from "../movie";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.details} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={styles.details}>
        <h1 className={styles.firstItem}>{movie.title}</h1>
        <p>
          <strong>Overview: </strong> {movie.overview}
        </p>
        <p>
          <strong>Date: </strong>
          {movie.release_date}
        </p>
        <p>
          <strong>Runtime: </strong>
          {movie.runtime} min
        </p>
        {/*return a list of them*/}
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Production: </strong>
          {movie.production_companies.map((company) => company.name).join(", ")}
        </p>
        <p>
          <strong>Countries: </strong>
          {movie.production_countries.map((country) => country.name).join(", ")}
        </p>
        <p>
          <strong>Languages: </strong>
          {movie.spoken_languages.map((language) => language.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
