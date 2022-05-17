1. github repository 만들기(원격 저장소 생성)
2. create-react-app 실행
   - npx create-react-app <project-name>
3. 초기 git 설정파일 삭제
   - rm -r .git
4. git 초기화
   - git init
5. git 브랜치 변경(master -> main, github repository 기본 branch 가 main으로 변경됨)
   - git branch -M main
6. github repository 연결
   - git remote add origin <github-repository>
7. 기존 readme.md 제거(참고하려면 다른곳으로 옮겨도 괜찮, 원격 저장소 만들때 readme.md 없으면 8번으로)
   - rm -r readme.md
8. 원격 저장소 가져오기(원격 저장소 readme.md 가져오기, 동기화)
   - git pull origin main
9. react 파일 추가
   - git add .
10. 커밋하기
    - git commit -m <message>
11. 원격 저장소에 올리기
    - git push origin master
