# <h1> react study 2020.03.08

## <h2> basic

-li

1. li
   ![image](src)
   [link](url)
   **strong**

```js
   function fn(){
      return ...
   }
```

<br />
```text
1단계: git status   
git add .

2단계: commit, push  
local - where? - server  
 commit - push

3단계: git commit -m "메시지"  
git status

4단계: git log  
git push origin <branch>
```
>## 필기

>>```text
readme.md : 마크다운언어 -> 깃헙에서 이걸로 소통

npm run lint : 규칙 어긋난 코딩을 잡아줌
npm run lint --fix : 고칠수있는범위에서 부분 고쳐줌
npm run prettier : 코딩 규칙에서 틀린 걸 고쳐줌

git status(수정된 파일을 보여줌) -> 파일 수정 시 항상 git add . 으로 새 코딩을 추가해준다 -> git status(수정 파일 확인) ->
git commit -m "메시지 내용" -> git push origin master : 깃헙에 파일 업로드

global상태관리
redux(무거움), hooks + contextAPI(가벼움)

class extends : 과거의 리액트 방식
function() : 현재의 리액트 방식 + 훅을 이용하여 사이클 흉내

state: 내가 가진 값
props: 누군가를 통해 받은 값

export defualt : 한 개만 내보냄
export : 여러 개의 객체를 내보냄 {  }에 이름을 써준다.

컴포넌트 명은 항상 앞에 대문자

--save : package.json에 저장 (서비스에 영향)
--dev : 개발단계에만 필요(서비스 X)

npm install : 변경된 패키지만 설치
````

# 0315
## branch
```
git checkout 브랜치이름-> 이미 생산된 브랜치로 이동
git checkout -b feature-add-text -> -b 브랜치 생성(마스터에서 피쳐로 이름이 바뀜, 마스터와 분리된 환경 작업 생성)
git push origin 브랜치이름 : 해당 브렌치에 상태 반영
git pull origin master : 서버의 최신 상태 반영
```

```
return 생략시 => ( ) 사용
<> </> 빈괄호 안 내용을 반환 (<React를 생략한 것>)
addon-knobs : select('props', [선택자들], '기본값)
```
