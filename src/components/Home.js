import styles from "./Home.module.css"; //CSS modules

import {
    Link
  } from "react-router-dom";

export function Home() {
  return (
    <div>
      <div className={styles.home}>
        <h1>Welcome to Movies React</h1>
      </div>
      <div className={styles.banner}>
        <h2>What is Movies React?</h2>
        <p>
            Movies React is a simple React app that shows you the most popular movies in the world.
        </p>
        <Link to="movies">Go to watch</Link>
      </div>
    </div>
  );
}
