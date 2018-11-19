// 1. react와 reactDOM 라이브러리 import
import React from 'react';
import ReactDOM from 'react-dom';

// 2. react의 컴포너넌트를 생성
// component는 1. html생성해서 사용자에게 보여주거나, 2. 이벤트핸들링 / 피드백을 처리하는 역할을 함.
const App = () => {
    const buttonText = {happy: 'hacking'};
    function getTime(){
        return (new Date()).toLocaleTimeString();
    }

    return (
    <div>
        <h3>{getTime()}</h3>
        <label htmlFor="name" className="name-label">Enter name: </label>
        <input type="text" id="name"/>>
        <button style={{ backgroundColor: 'blue', color:'white', border:'solid 1px black' }}>
            {buttonText.happy}
        </button>
    </div>
    )
}


// 3. 화면에 HTML을 띄우기
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)