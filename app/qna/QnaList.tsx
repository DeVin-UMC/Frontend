import { fetchQna } from '../../api/qna';

export default async function QnaList() {
  const res = await fetch('http://localhost:3000/api/qna', {
    next: {
      revalidate: 10,
    },
  });
  console.log(res);
  const data = await fetchQna();
  // console.log(data);
  return <>h1xz</>;
}
