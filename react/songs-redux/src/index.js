// react-redux setting
import React from 'react';
import ReactDOM from 'react-dom';

// 패키지, 모듈
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 내가 작성한 코드, 컴포넌트
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App/>
    </Provider>,
    document.querySelector('#root')
)


