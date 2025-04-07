import React, { useState } from 'react';
import '@cssPage/state/state01.scss';

const State01 = () => {
    const [count, setCount] = useState(0);  // 버튼 클릭 횟수를 추적하는 상태 변수

    const increment = () => {
        setCount(count + 1); // 클릭 시 count를 1 증가
    };

    const decrement = () => {
        setCount(count - 1); // 클릭 시 count를 1 감소
    };

    return (
        <div className='state01'>
            <div className="state01__inner--common">
                <h1 className="state01__title">React State Practice</h1>
                <p className="state01__description">이곳에서는 React 상태를 이용한 간단한 예제를 제공합니다.</p>

                <div className="state01__counter">
                    <p className="counter__value">현재 카운트: {count}</p>
                    <button className="counter__button" onClick={increment}>증가</button>
                    <button className="counter__button" onClick={decrement}>감소</button>
                </div>
            </div>
        </div>
    );
}

export default State01;
