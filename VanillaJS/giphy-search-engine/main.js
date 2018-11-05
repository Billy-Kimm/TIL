// 1. <input> 태그 안의 값을 잡는다
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');

button.addEventListener('click', () => {
    const inputValue = document.querySelector('#js-input').value;
    pushToDOM(inputValue);
});

inputArea.addEventListener('keyup', (e) => {
    const keyValue = document.querySelector('#js-input').value;
    if(e.which === 13){
     pushToDOM(keyValue);
    }
});

// 2. API 를 활용하여 data를 받는다. 그리고 가공한다.
    const API_KEY = '5JeB48DMaF1D3h29EzgcdwCQMqLJxnNY';
    let keyword = 'cat';
    const URL = `api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
    console.log(URL);

// 3. GIF 파일들을 index.html에 밀어 넣는다.
const pushToDOM = (data) => {
    const resultArea = document.querySelector("#result-area");
    resultArea.innerHTML = data;
}
