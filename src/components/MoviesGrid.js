import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";

export function MoviesGrid({search}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true)

  //Use Efect to fetch movies from API
  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      //data is the response from the API
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages)
      setIsLoading(false)
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />
  }

  return (
    <InfiniteScroll
      dataLength={movies.length} //This is important field to render the next data
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={hasMore}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {/*Para cada objeto, llamamos a la funcion MovieCard*/}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
