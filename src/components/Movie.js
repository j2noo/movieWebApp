import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ className, coverImg, title, genres, id }) {
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
          hoveredId == id ? styles.hovering : null /* 마우스가 올라간 요소에만 부여*/
        }`}
      >
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Movie;
