import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ coverImg, title, summary, genres, id }) {
  const onMouseEnter = (event) => {
    let modal = event.target.nextSibling;
    console.log(modal);
    modal.classList.add("hovering");

    modal.style.visibility = "visible";
  };
  const onMouseLeave = (event) => {
    let modal = event.target.nextSibling;
    modal.classList.remove("hovering");
    modal.style.visibility = "hidden";
  };
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div className="movieDiv">
          <img
            src={coverImg}
            onMouseOver={onMouseEnter}
            onMouseOut={onMouseLeave}
          ></img>
          <div className="modal">
            <h2>{title}</h2>
            <p>
              {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
            </p>
          </div>
        </div>
      </Link>

      {/*
      
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>*/}
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
