const promise = new Promise((resolve, reject)=>{
    const number = Math.floor(Math.random()*100)
    // async 한 작업중 ....
    if(number % 2 === 1) resolve({id:1, email:'sangyounw@naver.com'}) // 성공시
    else reject(new Error('error....')) // 실패시
});

// promise실행하고, then은 성공시 할것 , catch는 실패시 할것
promise
    .then(user => console.log(user.email))
    .catch(error => console.error(error.message));