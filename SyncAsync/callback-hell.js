console.log('메인 코드 진행중...');

 getUser(1, (u)=>{
    getRepos(u.githubID, (repos)=>{
        console.log(repos);
        getCommits(repo[0], (commit)=>{
            console.log(commit);
        });
    });
});


console.log('메인 코드 계속 진행중...');

function getUser(id, callback){
    const users = [
        {id:1, githubID: 'neo'},
        {id:1, githubID: 'john'},
    ]
    setTimeout(() => {
        console.log('reading data from db');
        const user = users.find((user) => user.id === id);
        // ready!
        callback(user);
    }, 2000);
}

function getRepos(userID, callback){
    console.log(`finding [${userID}] is all github repo`);
    setTimeout(()=>{
        callback(['TIL', 'ES6', 'Express-demo']);
    }, 1500)
}

function getCommits(userID, callback){
    console.log(`getting all commits in ${repo}`);
    setTimeout(() => {
        callback(['init repo', 'finish somthing'])
    }, 2000);
};