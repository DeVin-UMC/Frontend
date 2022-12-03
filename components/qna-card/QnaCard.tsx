import { Qna } from "../../types/Qna";
import styles from "./QnaCard.module.scss";
import Image from "next/image";
import Button from "../ui/atomic/button/Button";
import Typography from "../ui/atomic/typography/Typography";

const QnaCard = ({ title, content, tags }: Qna) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <header className={styles.header}>
          <Typography variant={"subheading1"}>{title}</Typography>
        </header>
        <div className={styles.ellipsis}>
          <Typography variant={"body1"}>{content}</Typography>
        </div>
      </section>
      <aside className={styles.aside}>
        <header>
          <Image src="/icons/CL_A.svg" width={25} height={25} alt="button" />
        </header>
        <ul className={styles.tags}>
          {tags?.map((tag, index) => (
            <Button key={index} content={tag} intent={"tag"} />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default QnaCard;
