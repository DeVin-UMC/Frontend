import styles from "./contentsWindow.module.scss";

const ContentsWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles["top-line"]}></div>
      <div className={styles.window}></div>
      <div className={styles.contents}>test1</div>
      {/* <div className={styles.contents}>test2</div> */}
      {/* <div className={styles.contents}>test3</div> */}
    </div>
  );
};

export default ContentsWindow;
