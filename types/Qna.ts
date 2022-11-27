export type QnaResult = {
  responseTime: number;
  isSuccess: boolean;
  code: number;
  message: string;
  result: Qna[];
};

export type Qna = {
  title: string;
  content: string;
  writer: string;
  countAnswer: number;
  countLike: number;
  countUnlike: number;
  tags: string;
  like: boolean;
  unlike: boolean;
  commented: boolean;
};
