import styles from "./Header.module.css";
import instaImg from "../images/insta.png";
import githubImg from "../images/github.png";

function Header() {
  return (
    <nav>
      <ul>
        <li className={styles.fontTrans}>JINFLIX</li>
        <li className={styles.sns}>
          <a className={styles.a} href="https://github.com/j2noo">
            <img src={githubImg} alt="githubImg" />
          </a>
        </li>
        <li className={styles.sns}>
          <a className={styles.a} href="https://www.instagram.com/jinuu_p/">
            <img src={instaImg} alt="instaImg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
