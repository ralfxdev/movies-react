//import movie from "../movie";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500)

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
