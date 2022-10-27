import "./Header.css";
import instaImg from "../images/insta.png";
import githubImg from "../images/github.png";

function Header() {
  return (
    <nav>
      <ul>
        <li className="fontTrans">JINFLIX</li>
        <li className="sns" id="github">
          <a href="https://github.com/j2noo">
            <img src={githubImg} alt="githubImg" />
          </a>
        </li>
        <li className="sns" id="insta">
          <a href="https://www.instagram.com/jinuu_p/">
            <img src={instaImg} alt="instaImg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
