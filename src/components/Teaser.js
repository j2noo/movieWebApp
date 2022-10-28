import "./Teaser.css";
import playImg from "../images/play.png";
import infoImg from "../images/info.png";
import { useEffect, useState } from "react";
function Teaser() {
  const summary =
    "최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도되는데...";
  const [summ, setSumm] = useState(summary);
  const src = "https://www.youtube.com/watch?v=gNtJ4HdMavo";
  useEffect(() => {
    const onresize = () => {
      if (window.innerWidth < 300) {
        setSumm("");
      } else if (window.innerWidth < 600) {
        setSumm(summary.slice(0, 50) + "되는데...");
      } else {
        setSumm(summary);
      }
    };
    window.addEventListener("resize", onresize);
  }, []);
  const onMouseOver = (event) => {
    const elem = event.currentTarget;
    elem.classList.toggle("buttonHover");
  };
  const onMouseOut = (event) => {
    const elem = event.currentTarget;
    elem.classList.toggle("buttonHover");
  };
  return (
    <div className="wrapper">
      <video
        src={process.env.PUBLIC_URL + "/videos/top2.mp4"}
        autoPlay
        muted
        loop
      ></video>
      <p className="recommend">당신을 위한 추천 영화 컨텐츠</p>
      <p className="title">TOP GUN</p>
      <p className="summary">{summ}</p>
      <div
        id="playBtn"
        className="button"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <span className="imgContainer">
          <img src={playImg} alt="playBtn"></img>
        </span>
        <span className="text">재생</span>
      </div>
      <div
        id="infoBtn"
        className="button"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <span className="imgContainer">
          <img src={infoImg} alt="infoBtn"></img>
        </span>
        <span className="text">상세정보</span>
      </div>
    </div>
  );
}

export default Teaser;
