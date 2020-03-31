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

````
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
git checkout -b 브랜치이름 -> -b 브랜치 생성(마스터에서 뉴 브랜치로 이름이 바뀜, 마스터와 분리된 환경 작업 생성)
git push origin 브랜치이름 : 해당 브렌치에 상태 반영
git pull origin master : 서버의 최신 상태 반영
```

```
return 생략시 => ( ) 사용
<> </> 빈괄호 안 내용을 반환 (<React를 생략한 것>)
addon-knobs : select('props', [선택자들], '기본값)
```

# 0322

```
props를 받아오면 컴포넌트의 인자(프롭스)의 PropTypes 정의해줘야함
해체할당자 : { a, b, c }
Route path 사용시 중복되는 패스가 있으면 exact를 붙여 해당 패스에만 이동되도록 설정
<Route exact path="" /> ex) / 루트와 /main 이 있다면 /가 중복 돼 /에 exact 붙이기

부모 스타일 속성 상속: 임포트 후 const 이름 = styled(부모컴포넌트명)`스타일`
useEffect는 비동기 지원이 안되므로 따로 설정해줘야함
컴포넌트의 onClick은 그냥 이름

Context는 1. provider 2. consumer 를 이용

ContextAPI 사용??
1. 페이지가 달라지는데 state가 유지되어야할떄
2. state가 복잡할 때
3. 렌더링

뒤로가기해도 페이지 유지? -> HashRouter 사용 .../#/경로

번들링 후 netlify에서 무료 배포

REDUX : 단방향 흐름 상태 관리
인풋 -> 액션(시작) -> 리듀서(액션 실행) -> 스토어(상태저장) -> 바디

jsonServer 만들기
npx json-server --watch db.json(파일명) --port 포트번호
npx : 패키지 무설치 실행 <-> npm : 패키지 설치 실행

a as b => b를 a로 이름을 변경 b : a와 같은 의미
ex) const { Provider, MyConsumer as Consumer } = Context
    const { Provider, Consumer : MyConsumer } = Context

{children} : 내용이 바뀌는 곳
```

# 0329

```
리듀서 사용하는 이유 : state관리를 한번에 하여 렌더링을 줄임, 단방향 흐름
reducer(state, action) -> 고정 매개변수
리듀서를 실행하기 위해 useReducer 사용
dispatch : action을 일으키는 함수를 전달
useEffect는 async 지원 안하므로 안에 한번 더 async 함수 만들어주기
디펜던시에 의존 안하겠다는 주석 : // eslint-disable-line react-hooks/exhaustive-deps
```
