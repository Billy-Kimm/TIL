// ES5
function makeRequest(url, method){
    if(!method){
        method = 'GET';
    }
    doSomething(method, url);
} 

makeRequest('http://hphk.io');
makeRequest('http://hphk.io', 'GET');
makeRequest('http://hphk.io', 'POST');


// ES6
function makeRequest2(method='GET', url){
    doSomething(method,url);
}

// 실습 refactoring 
function sum(a=0,b=0){
    return a+b;
}
const sum = (a=0, b=0) => a+b;

function addOffset(style={}){
    style.offset = '10px';
    return style;
}

