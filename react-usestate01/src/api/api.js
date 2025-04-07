import axios from "axios";

const api = axios.create({
    baseURL : import.meta.env.VITE_BASEURL,
    timeout : 1000,
    headers : {'Content-Type' : 'application/json'},
    withCredentials: true, // 쿠키 인증이 필요한 경우 true로 설정
});

api.interceptors.request.use((config) => {
    // 요청 전 작업 수행 (예: 토큰 추가 등)
    const baseToken = localStorage.getItem('baseToken'); // 예시로 로컬 스토리지에서 토큰 가져오기
    if (baseToken) {
        config.headers['Authorization'] = `Bearer ${baseToken}`; // Authorization 헤더에 토큰 추가
    }
    return config;
}, (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
});

export default api;

