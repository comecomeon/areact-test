import React from 'react';
import '@cssPage/state/home.scss';

const Home = () => {
    return (
        <div className='mainWrap'>
            <div className="main__inner--common">
                <h1 className="main__title">Welcome to React Practice 🧠</h1>
                <p className="main__subtitle">
                    이 사이트는 React의 핵심 개념인 <strong>State, Effect, Props, Ref</strong> 등을 직접 실습하며 익힐 수 있도록 구성된 학습 플랫폼입니다.
                </p>

                <div className="main__features">
                    <div className="feature">
                        <h3>📌 실습 중심</h3>
                        <p>코드 작성과 함께 바로 결과를 확인하며 React를 몸에 익힐 수 있습니다.</p>
                    </div>
                    <div className="feature">
                        <h3>⚡ 최신 기술 스택</h3>
                        <p>React 19, Vite, SCSS, Axios 등 실무에 사용되는 기술로 구성되어 있습니다.</p>
                    </div>
                    <div className="feature">
                        <h3>🧪 API 실습</h3>
                        <p>FakeStore API와 연동하여 CRUD 기능을 체험할 수 있습니다.</p>
                    </div>
                </div>

                <button className="main__btn">지금 시작하기</button>
            </div>
        </div>
    );
};

export default Home;
