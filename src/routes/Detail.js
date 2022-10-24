import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const x = useParams();
  console.log(x.id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detial..</h1>;
}
export default Detail;
