import { useQuery } from "@tanstack/react-query";
import { fetchQna } from "../api/qna";

const useQna = () => {
  const qnaQuery = useQuery(["qna"], fetchQna);
  return { qnaQuery };
};

export default useQna;
