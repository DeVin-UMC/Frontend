import { Qna } from "../../types/Qna";
import QnaCard from "../qna-card/QnaCard";
import styles from "./QnaList.module.scss";

type Props = {
  qnaList?: Qna[];
};
const QnaList = ({ qnaList }: Props) => {
  return (
    <div className={styles.container}>
      {qnaList?.map((qna, index) => (
        <QnaCard key={index} {...qna} />
      ))}
    </div>
  );
};

export default QnaList;
