# Learn Git

What is Git?

VCS(Version Control System) / SCM(Source Code Management)

| Command                     | Description                                          | Example                                  |
| --------------------------- | ---------------------------------------------------- | ---------------------------------------- |
| $ git init                  | .git 디렉토리 생성 및 초기화                         | $ git init                               |
| $ git add <FILE>            | file 스태이징                                        | $ git add 파일명                         |
| $ git add <PATH>            | path 스태이징                                        | $ git add .                              |
| $ git commit                | add를 통해 스태이징 한후에 커밋한다.                 | $ git commit -m "내용"                   |
| $ git status                |                                                      | $ git status                             |
| $ git log                   |                                                      | $ git log                                |
| $ git remote add origin     | remote repository를 가리킨다.                        | $ git remote add origin URL              |
| $ git push -u origin master | remote repository에 푸쉬한다. (처음만!)              | $ git push -u origin master              |
| $ git diff                  | 파일 수정한 내용                                     | $ git diff                               |
| $ git ignore                | touch .gitignore로 config 파일 생성                  | $ touch gitignore  무시할 파일 목록 쓰기 |
| $ git branch                | branch 목록                                          | $ git branch                             |
| $ git branch <NAME>         | 새 브랜치 만들기(원본복사개념)                       | git branch about-page                    |
| $ git checkout <NAME>       | 브랜치 바꾸기.                                       | $ git checkout about-page                |
| $ git merge<NAME>           | name 페이지를 머지한다                               | 마스터에서 $ git merge about-page        |
| $ git branch -d <NAME>      | branch 삭제 (강제 삭제는 대문자 D)                   | $ git branch -d about-page               |
| $ git checkout -b <NAME>    | branch를 만들고 전환                                 | $ git checkout -b help-page              |
| $ git checkout <commit ssh> | git log 에서 이동할 commit ssh를 입력하면 글로 간다. | $ git checkout e9c2                      |
| $ git checkout -f           | 마지막 commit 으로 롤백                              | $ git checkout -f                        |
| $ cat .git/config           | config 보기                                          |                                          |
| $ git remote -v             | remote 보기                                          |                                          |

| ssh 등록하기                                                 | result                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| $ ssh-keygen -t rsa                                          | 생성                                                         |
| s -al ~/.ssh                                                 | 생성확인                                                     |
| $ cat id_rsa.pub                                             | key 확인하고 복사                                            |
| github - setting에서 ssh keys 등록                           |                                                              |
| repository에서 ssh clone 후에 local com으로 와서 옆 명령어처럼 입력  <br />$ git remote set-url origin <git ssh> | $ git remote set-url origin 'git@github.com:Billy-Kimm/TIL.git' |
| $cat .git/config 에서 remote origin ssh로 바뀐것 확인        |                                                              |
| $ nodemon <name>                                             | $ nodemon index.js                                           |
| $ export NODE_ENV=development                                | node개발환경 설정                                            |
| $ $NODE_ENV                                                  | 잘되었는지 확인                                              |
| $ export DEBUG=app:startup                                   | 사용전 git bash/ cmd 에서 환경로트 설정                      |
| $ DEBUG=app:* nodemon index.js                               | 디버그 간편히 사용                                           |
| $ DEBUG=app:<naming한 것> nodemon index.js                   | 디버그 간편히 사용                                           |
| $ DEBUG=app:startup,app:db nodemon index.js                  | 여러개도 사용가능                                            |





| react 세팅                  | 내용             |
| --------------------------- | ---------------- |
| $ npm i -g create-react-app | 글로벌로 설치    |
| $ npx create-react-app jsx  | 이걸로 설치하자. |
|                             |                  |
|                             |                  |
|                             |                  |

| student@M100415 MINGW64 ~/TIL/react/jsx (react)
<br/>$ npm start | jsx에서 npm start 하기                |
| jsx의 public 폴더                                            | 이미지, 에러메세지용html 등을 넣는다. |
| src 폴더                                                     | 소스코드                              |
| $ npx create-react-app components                            | 컴퍼넌트 세팅                         |



$ npm i axios

