import useQna from "../../hooks/useQna";
import QnaList from "../../components/qna/QnaList";
import ContentsWindow from "../../components/contentsWindow/ContentsWindow";

const QnaPage = () => {
  const {
    qnaQuery: { data },
  } = useQna();

  return (
    <ContentsWindow title="/titles/PROJECT.svg">
      <QnaList qnaList={data?.result} />;
    </ContentsWindow>
  );
};

export default QnaPage;
