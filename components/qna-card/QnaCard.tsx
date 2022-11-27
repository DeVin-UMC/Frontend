import { Qna } from "../../types/Qna";
import styles from "./QnaCard.module.scss";
import Image from "next/image";

const QnaCard = ({ title, content, tags }: Qna) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1>{title}</h1>
        </header>
        <div className={styles.ellipsis}>{content}</div>
      </section>
      <aside className={styles.aside}>
        <header>
          <Image src="/icons/CL_A.svg" width={25} height={25} alt="button" />
        </header>
        <ul className={styles.tags}>
          {tags?.map((tag, index) => (
            <div key={index} className={styles.tag}>
              {tag}
            </div>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default QnaCard;
