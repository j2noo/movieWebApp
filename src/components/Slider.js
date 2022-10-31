import styles from "./Slider.module.css";

function Slider({ title }) {
  const arr = ["영화1", "영화2", "영화3", "영화4", "영화5"];
  return (
    <div className={styles.sliderComponent}>
      <p>{title + "타이틀입니다"}</p>
      <div className={styles.sliderContainer}>
        {arr.map((item) => (
          <div className={styles.sliderItem} key={item}>
            {item}
            <span className="test">test!!!</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
