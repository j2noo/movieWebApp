import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Teaser from "../components/Teaser";
import Slider from "../components/Slider";
import styles from "./Home.module.css";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="Home">
          <Teaser />
          <Slider title="로맨스" />
          <Slider title="코미디" />
          <Slider title="드라마" />

          <div className="container"></div>
        </div>
      )}
    </div>
  );
}

export default Home;
