import { httpClient } from "./client/httpClient";
import { QnaResult } from "../types/Qna";

export const fetchQna = async (): Promise<QnaResult> => {
  const response = await httpClient.get<QnaResult>("/qna ");
  return response.data;
};
