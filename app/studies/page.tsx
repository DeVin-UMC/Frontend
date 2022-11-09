'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchStudies } from '../../api/studies';

export default function Studies() {
  const { data } = useQuery(['studies'], fetchStudies);
  console.log(data);
  return <></>;
}
