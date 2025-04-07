import React from 'react';
import { useState, useEffect } from 'react';
import '@cssPage/state/useeffect01.scss';
import api from '@api/api.js';
import axios from 'axios';

const Useeffect01 = () => {

    const [users, setUsers] = useState([]); // 사용자 정보를 저장할 상태 변수입니다.

    const baseApi = api.defaults.baseURL; // api.js에서 설정한 baseURL을 가져옵니다.

    useEffect(() => {
        axios.get(`${baseApi}/users`)
        .then((res) => {
            setUsers(res.data); // 사용자 정보를 상태에 저장합니다.
        }). catch((err) => {
            console.error('API Error:', err); // API 오류를 출력합니다.
        });
    },
    []);

    return (
        <div className='useeffect01'>
            <div className="useeffect01__inner--common">
                <h2>유저 리스트</h2>
                <ul>
                    {users.map((users, i) => {
                        return (
                            <li key={i}>
                                <div className="useeffect01__inner--common--item">
                                    <div className="useeffect01__inner--common--item--name">이름: {users.username}</div>
                                    <div className="useeffect01__inner--common--item--email">이메일: {users.email}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Useeffect01