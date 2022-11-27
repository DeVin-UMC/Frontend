import useQna from "../../hooks/useQna";
import QnaList from "../../components/qna/QnaList";

const QnaPage = () => {
  const {
    qnaQuery: { data },
  } = useQna();

  return <QnaList qnaList={data?.result} />;
};

export default QnaPage;
