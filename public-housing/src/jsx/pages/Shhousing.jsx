import React, { useEffect, useState } from 'react';
import '@cssPage/shhousing.scss';
import api from '@api/api.js';

const Shhousing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchHousingData = async () => {
            try {
                const response = await api.get(import.meta.env.VITE_API_ENDPOINT, {
                    params: {
                        page: 1,
                        perPage: 100,
                        serviceKey: import.meta.env.VITE_SERVICE_KEY,
                    },
                });
                setData(response.data.data);
            } catch (error) {
                console.error('API 요청 실패:', error);
            }
        };

        fetchHousingData();
    }, []);

    return (
        <div className="ShhousingWrap">
            <div className="Shhousing__inner--common">
                <h3>서울주택도시공사 국민임대주택 | 임대주택을 위한 플랫폼</h3>
                <div className="Shhousing__grid">
                    {data.map((item, index) => (
                        <div key={index} className="Shhousing__card">
                            <h4>{item.단지명 || '단지명 없음'}</h4>
                            <p>유형: {item.유형 || '-'}</p>
                            <p>소재지: {item.소재지 || '-'}</p>
                            <p>공급 예정 년도: {item['공급(예정) 년도'] || '-'}</p>
                            <p>공급 예정 월: {item['공급(예정)월'] || '-'}</p>
                            <p>총 공급 세대수: 총 {item['공급 계'] || '-'}세대</p>
                            <h6 className='sub_tit'>각 ㎡당 공급 호수</h6>
                            <p>29㎡: {item['공급예정물량(29제곱미터)'] || '-'}호</p>
                            <p>39㎡: {item['공급예정물량(39제곱미터)'] || '-'}호</p>
                            <p>49㎡: {item['공급예정물량(49제곱미터)'] || '-'}호</p>
                            <p>비고: {item.비고 || '-'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shhousing;
