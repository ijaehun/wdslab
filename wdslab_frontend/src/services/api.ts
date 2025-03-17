import axios from 'axios';

// Docker 환경 변수를 확인하여 적절한 baseURL 설정
const baseURL = process.env.NODE_ENV === 'production' 
  ? 'http://backend:8000/api'  // 도커 프로덕션 환경
  : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';  // 개발 환경

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;