// 1. <input> 태그 안의 값을 잡는다
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', () => {
    const inputValue = document.querySelector('#js-input').value;
    searchAndPush(inputValue);
});

inputArea.addEventListener('keyup', (e) => {
    const keyValue = document.querySelector('#js-input').value;
    if(e.which === 13){
        searchAndPush(keyValue);
    }
});

const searchAndPush = (keyword) => {
// 2. API 를 활용하여 data를 받는다. 그리고 가공한다.
    const API_KEY = '5JeB48DMaF1D3h29EzgcdwCQMqLJxnNY';
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
    console.log(URL);
    
    // Ajax request
    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', (e) => {
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
        pushToDOM(parsedData);    
    });
};

// 3. GIF 파일들을 index.html에 밀어 넣는다.
const pushToDOM = (parsedData) => {
    resultArea.innerHTML = null;
    console.log(parsedData);
    const DataSet = parsedData.data;
    // console.log(DataSet);

    // iterator
    DataSet.forEach((imageData) => {
        let imageURL = imageData.images.fixed_height.url;
        let alt = imageData.title;
        resultArea.innerHTML += `<img src="${imageURL}" alt='${alt}'/>`;
    });

    // let imageURL = parsedData.data[1].images.fixed_height.url;

}
