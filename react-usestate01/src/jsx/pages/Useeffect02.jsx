import React, { useState } from 'react'; // 리액트와 useState 불러오기
import '@cssPage/state/useeffect02.scss'; // 스타일 파일 불러오기
import api from '@api/api.js'; // axios 인스턴스 불러오기

const Useeffect02 = () => {
    // 👇 각 입력 필드를 위한 상태 선언
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ✅ 폼 제출 이벤트 핸들러
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출(페이지 새로고침) 방지

        const postUser = {
            username,
            email,
            password,
        };

        api.post('/users', postUser) // POST 요청 보내기
            .then((res) => {
                console.log('✅ 회원가입 성공:', res.data); // 응답 데이터 확인
                alert('회원가입이 완료되었습니다!');
            })
            .catch((err) => {
                console.error('❌ 회원가입 실패:', err);
                alert('회원가입 중 오류가 발생했습니다.');
            });
    };

    // ✅ 리턴하는 부분은 실제 HTML 화면을 구성
    return (
        <div className='useeffect02'>
            <div className="useeffect02__inner--common">
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <div className="useeffect02__inner--common--item">
                        <label htmlFor="username">이름</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="이름을 입력하세요"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // 상태값 갱신
                        />
                    </div>

                    <div className="useeffect02__inner--common--item">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="이메일을 입력하세요"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // 상태값 갱신
                        />
                    </div>

                    <div className="useeffect02__inner--common--item">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // 상태값 갱신
                        />
                    </div>

                    <button type="submit">회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default Useeffect02;
