import React from 'react';
import '@cssPage/state/state.scss'
import { useState } from 'react';

const State02 = () => {

    const [number, setNumber] = useState(0);
    const [text, setText] = useState('Hello World!');
    const [isTrue, setIsTrue] = useState(true);
    const [array, setArray] = useState([1, 2, 3]);
    const [object, setObject] = useState({ name: 'John', age: 30 });
    const [date, setDate] = useState(new Date());

    const handleNumberChange = () => {
        setNumber(number + 1);
    }
    const handleTextChange = () => {
        setText(text === 'Hello World!' ? 'Hello React!' : 'Hello World!');
    }
    const handleBooleanChange = () => {
        setIsTrue(!isTrue);
    }
    const handleArrayChange = () => {
        setArray([...array, ++array.length]);
    }
    const handleObjectChange = () => {
        setObject({ ...object, age: ++object.age});
    }
    const handleDateChange = () => {
        setDate(new Date());
    }
    const handleAllChange = () => {
        handleNumberChange();
        handleTextChange();
        handleBooleanChange();
        handleArrayChange();
        handleObjectChange();
        handleDateChange();
    }

    return (
        <div className='state02'>
            <div className="state02__inner--common">
                <div className="box">
                    <h2>State02 Number</h2>
                    <h3>{number}</h3>
                    <button onClick={handleNumberChange}>작동테스트</button>
                </div>
                <div className="box">
                    <h2>State02 Text</h2>
                    <h3>{text}</h3>
                    <button onClick={handleTextChange}>작동테스트</button>
                </div>
                <div className="box">
                    <h2>State02 Boolean</h2>
                    <h3>{isTrue ? 'True' : 'False'}</h3>
                    <button onClick={handleBooleanChange}>작동테스트</button>
                </div>
                <div className="box">
                    <h2>State02 Array</h2>
                    <h3>{array.join(', ')}</h3>
                    <button onClick={handleArrayChange}>작동테스트</button>
                </div>
                <div className="box">
                    <h2>State02 Object</h2>
                    <h3>{`${object.name}, ${object.age}`}</h3>
                    <button onClick={handleObjectChange}>작동테스트</button>
                </div>
                <div className="box">
                    <h2>State02 Date</h2>
                    <h3>{date.toString()}</h3>
                    <button onClick={handleDateChange}>작동테스트</button>
                </div>
            </div>
        </div>
    )
}

export default State02