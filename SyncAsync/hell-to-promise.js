console.log('메인 코드 진행중...');

// 5,6,7 한줄한줄이 모두 promise임. 그래서 8번째 catch에 각각 적용이된다.
getUser(2)
    .then(user => getRepos(user.githubID))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(error => console.error(error));


console.log('메인 코드 계속 진행중...');

/* functions */

function getUser(id){
    const users = [
        {id:1, githubID: 'neo'},
        {id:2, githubID: 'john'},
    ]

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if(user) resolve(user);
            else reject(new Error(`cant find user id: ${id}`));
        }, 2000)
    })
}

function getRepos(userID){
    console.log(`finding [${userID}] is all github repo`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const i = Math.floor(Math.random()*100);
            if(i % 2 === 1) resolve(['TIL', 'ES6', 'Express-demo']);
            else reject(new Error(`cant find user id: ${userID}`));
        }, 1500)
    })
}

function getCommits(repo){
    console.log(`getting all commits in ${repo}`);
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        const i = Math.floor(Math.random()*100);
        if (i%2 ===1)resolve(['init repo', 'finish somthing']);
        else reject(new Error(error.message));
    }, 2000)
    })
};