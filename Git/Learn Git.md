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
| $ git push -u origin master | remote repository에 푸쉬한다. (처음만!)              | $ git push -u origin master URL          |
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

| html          | result |
| ------------- | ------ |
| ul>li*5 + tab |        |

