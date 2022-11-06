import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, title, id, rating, genres }) {
  const [hoveredId, setHoveredId] = useState(null);

  let hoverClass = `${styles.hovering}`;
  const onMouseEnter = (event) => {
    let modal = event.target.nextSibling;
    setHoveredId(event.target.id);
  };
  const onMouseLeave = (event) => {
    let modal = event.target.nextSibling;
    setHoveredId(null);
  };
  function printRating(rating) {
    let ret = "";
    rating = Math.round(rating / 2);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ret += "★";
      } else {
        ret += "☆";
      }
    }
    return ret;
  }
  return (
    <Link to={`/movie/${id}`} className={styles.imgLink}>
      <img
        src={coverImg}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        id={id}
      ></img>
      <div
        className={`${styles.modal}  ${
          hoveredId == id
            ? styles.hovering
            : null /* 마우스가 올라간 요소에만 부여*/
        }`}
      >
        <p className={styles.title}>{title}</p>
        <p className={styles.rating}>{`${printRating(rating)} / ${rating}`}</p>
        <ul className={styles.genres}>
          {genres.map((item) => (
            <li key={id + item}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default Movie;
