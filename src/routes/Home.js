import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Teaser from "../components/Teaser";
import Slider from "../components/Slider";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [moviesRate, setMoviesRate] = useState([]);
  const [moviesCrime, setMoviesCrime] = useState([]);
  const [moviesHorror, setMoviesHorror] = useState([]);
  const [moviesThriller, setMoviesThriller] = useState([]);

  const getMovies = async () => {
    const moviesRate = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    const moviesCrime = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?genre=crime&limit=10")
    ).json();
    const moviesHorror = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?genre=horror&limit=10"
      )
    ).json();
    const moviesThriller = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?genre=thriller&limit=10"
      )
    ).json();

    setMoviesRate(moviesRate.data.movies);
    setMoviesCrime(moviesCrime.data.movies);
    setMoviesHorror(moviesHorror.data.movies);
    setMoviesThriller(moviesThriller.data.movies);
    setLoading(false);

    console.log(moviesHorror);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.home}>
          <Teaser />
          <Slider title="최고 평점 콘텐츠" movies={moviesRate} />
          <Slider title="추천 느와르 콘텐츠" movies={moviesCrime} />
          <Slider title="추천 호러 콘텐츠" movies={moviesHorror} />
          <Slider title="추천 스릴러 콘텐츠" movies={moviesThriller} />
        </div>
      )}
    </div>
  );
}

export default Home;
