import styles from "./Loading.module.css";

function Loading() {
  const tip = [
    "이 문구는 새로고침 할때마다 바뀌어요",
    "공부는 꾸준히 하자구요",
    "전 디자인 감각이 없는거 같아요",
    "css를 잘다루고 싶어요",
    "제 최애영화는 탑건이에요",
  ];
  const rand = Math.floor(Math.random() * tip.length);
  return (
    <div className={styles.loadingDiv}>
      <p className={styles.loadingP}>Loading..</p>
      <p className={styles.tipP}>{`※ ${tip[rand]}`}</p>
    </div>
  );
}
export default Loading;
