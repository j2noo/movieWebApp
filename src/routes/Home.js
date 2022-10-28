import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Teaser from "../components/Teaser";

import "./Home.css";
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
          <div className="container">
            {movies.map(
              (
                movie //그나냥 prop으로 movie 주는게 낫지아난
              ) => (
                <Movie
                  key={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                  id={movie.id}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
