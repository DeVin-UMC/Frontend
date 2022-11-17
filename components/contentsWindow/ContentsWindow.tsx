import styles from "./contentsWindow.module.scss";

const ContentsWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.window}>
      <div className={styles["top-line"]} />
      <div className={styles.contents}>
        <div className={styles.grid}></div>
      </div>
    </div>
  );
};

export default ContentsWindow;
