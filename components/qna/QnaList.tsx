import { Qna } from "../../types/Qna";
import QnaCard from "../qna-card/QnaCard";

type Props = {
  qnaList?: Qna[];
};
const QnaList = ({ qnaList }: Props) => {
  return (
    <div>
      {qnaList?.map((qna, index) => (
        <QnaCard key={index} {...qna} />
      ))}
    </div>
  );
};

export default QnaList;
