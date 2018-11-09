# Learn Git

What is Git?

VCS(Version Control System) / SCM(Source Code Management)

| Command                              | Description                                          | Example                                             |
| ------------------------------------ | ---------------------------------------------------- | --------------------------------------------------- |
| $ git init                           | .git 디렉토리 생성 및 초기화                         | $ git init                                          |
| $ git add <FILE>                     | file 스태이징                                        | $ git add 파일명                                    |
| $ git add <PATH>                     | path 스태이징                                        | $ git add .                                         |
| $ git commit                         | add를 통해 스태이징 한후에 커밋한다.                 | $ git commit -m "내용"                              |
| $ git status                         |                                                      | $ git status                                        |
| $ git log                            |                                                      | $ git log                                           |
| $ git remote add origin              | remote repository를 가리킨다.                        | $ git remote add origin URL                         |
| $ git push -u origin master          | remote repository에 푸쉬한다. (처음만!)              | $ git push -u origin master URL                     |
| $ git diff                           | 파일 수정한 내용                                     | $ git diff                                          |
| $ git ignore                         | touch .gitignore로 config 파일 생성                  | $ touch gitignore  무시할 파일 목록 쓰기            |
| $ git branch                         | branch 목록                                          | $ git branch                                        |
| $ git branch <NAME>                  | 새 브랜치 만들기(원본복사개념)                       | git branch about-page                               |
| $ git checkout <NAME>                | 브랜치 바꾸기.                                       | $ git checkout about-page                           |
| $ git merge<NAME>                    | name 페이지를 머지한다                               | 마스터에서 $ git merge about-page                   |
| $ git branch -d <NAME>               | branch 삭제 (강제 삭제는 대문자 D)                   | $ git branch -d about-page                          |
| $ git checkout -b <NAME>             | branch를 만들고 전환                                 | $ git checkout -b help-page                         |
| $ git checkout <commit ssh>          | git log 에서 이동할 commit ssh를 입력하면 글로 간다. | $ git checkout e9c2                                 |
| $ git checkout -f                    | 마지막 commit 으로 롤백                              | $ git checkout -f                                   |
| $ git rm -r --cached <name>          | tracking 한것 지우기                                 | $ git rm -r --cached node_modules/<br />commit 이후 |
| $ git reset                          |                                                      | commit 이전                                         |
| $ echo 'node_modules/' >> .gitignore | .gitignore에다가 'node_modules/'를 어펜드한다.       | $ echo 'node_modules/' >> .gitignore                |

| html          | result |
| ------------- | ------ |
| ul>li*5 + tab |        |

- ctl + w 단어단위로 지우기 커맨드창에서..
- ctl + a 맨앞으로 이동 커맨드창에서..
- ctl + p
- ctl + n 





# Node.js

| consol 명령어                                       | 내용                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ |
| $ node -v                                           | 버전 확인                                                    |
| $ npm -v :                                          | 노드패키지매니지먼트 버전확인                                |
| $ npm i -g node-static                              | install global node-static                                   |
| $ REPL env                                          | REPL (Read Evaluate Print Loop)                              |
| $ .exit / ctl+d                                     | 나가기                                                       |
| $ node                                              | node 실행                                                    |
| $ node test.js                                      | test.js 실행                                                 |
|                                                     |                                                              |
| console.log(process.env);                           | global 관련된 여러 환경내용들..                              |
| console.log(process.argv);                          |                                                              |
|                                                     |                                                              |
| module.exports = log<br />export default log; (ES6) | log라는 함수를 다른곳으로 보낸다.                            |
| [NPM                                                |                                                              |
| $ npm init                                          |                                                              |
| $ cat package.json                                  |                                                              |
| $ npm i underscore                                  | npm 인스톨                                                   |
| $ npm r(m) underscore                               | npm 삭제                                                     |
| $ npm i                                             | 프로젝트에 필요한 각종 모듈 다 설치(단 명시되어 있어야함. json 파일등으로..) |
| $ npm i -g nodemon                                  | 시작되면 지켜보다가 변경되면 어플재실행                      |
| $ npm i -D                                          | 개발할 때만 쓰는 것들                                        |
| "express": "^4.16.4",                               | Semantic versioning: ^ caret : Major.Minor.Patch (major는 인터페이스와 같은 엄청난 코드 수정 / minor는 내부코드수정 / patch는 잔버그 수정등..) |
| $ npm i mongoose -E                                 | -E는 버전을 고정한다. exact 의미                             |
| $ npm ls                                            | npm으로 설치된 것들 보기 (tree 구조)                         |
| $ npm ls --depth=0                                  |                                                              |
| $ npm i jshint -D                                   | 에러메세지를 깔끔하게 정리해서 보여줌                        |
| $ npm publish                                       | init후에 배포시키기                                          |
| $ npm version major                                 |                                                              |
| $ npm version minor                                 |                                                              |
| $ npm version patch                                 |                                                              |
|                                                     |                                                              |

- node.js는 module단위로 구성한다. (파일이 아니다.!?)
- node.js는 global이라는 개념이 있다. js파일에서 console
- node.js는 function으로 구조를 이룬다. 함수로 전부 왔다갔다리..
- require, export 사용시, 무조건 const를 사용하는걸 추천.
- 









































