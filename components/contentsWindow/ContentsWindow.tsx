import styles from "./contentsWindow.module.scss";

const ContentsWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.window}>
      <div className={styles.contents}>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
        <div className={styles.dummy}>test</div>
      </div>
    </div>
  );
};

export default ContentsWindow;
