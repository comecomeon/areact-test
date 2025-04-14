import React from 'react';
import '@cssPage/lhhousing.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '@api/api.js';

const Lhhousing = () => {
    return (
        <>
            <div className='LhhousingWrap'>
                <div className="Lhhousing__inner--common">
                    <h3>한국주택도시공사 국민임대주택 | 임대주택을 위한 플랫폼</h3>
                </div>
            </div>
        </>
    )
}

export default Lhhousing