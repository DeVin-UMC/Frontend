import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://Devin-env.eba-ydykqmma.ap-northeast-2.elasticbeanstalk.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
