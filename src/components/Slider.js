import "./Slider.css";

function Slider({ title }) {
  const arr = ["영화1", "영화2", "영화3", "영화4", "영화5"];
  return (
    <div className="sliderComponent">
      <p>{title + "타이틀입니다"}</p>
      <div className="sliderContainer">
        {arr.map((item) => (
          <div className="sliderItem">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
