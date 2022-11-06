import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import Loading from "../components/Loading";

function Detail() {
  const x = useParams();
  console.log(x.id);
  const [loading, SetLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
    ).json();
    setMovie(json.data.movie);
    SetLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div
      style={{
        backgroundImage: `url(${movie.background_image_original})`,
        backgroundSize: "cover",
      }}
      className={styles.background}
    >
      <div className={styles.container}>
        <img className={styles.image} src={movie.large_cover_image}></img>
        <div className={styles.info}>
          <p>{`${movie.title}(${movie.year})`}</p>
          <ul>
            <li>평점 : {movie.rating}</li>
            <li>상영시간 : {movie.runtime}'</li>
            <li>
              <ul className={styles.genre}>
                {movie.genres.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Detail;
