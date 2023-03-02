# 😶‍🌫️ Intro
본 소스는 `리액트를 다루는 기술` 속 일정관리(TodoList)를 구현한 코드입니다.

# 🥸 Project Setup
### 최초 셋팅
```
yarn create react-app react-todo-app
cd react-todo-app
yarn add sass classnames react-icons
```
### 이후 시작
```
yarn add
yarn start
```

# 🤩 TIL
### props와 children
- props : 부모 컴포넌트가 자식에게 주는 값
  - 사용 예)
    - `<TodoList todos={todos}/>` todos 라는 변수명으로, 'todos' 라는 값을 보냄
    - 자식 컴포넌트에선 `const TodoList = ({todos}) => {...}`의 형태로 todos 변수명을 받아서 사용함
- children은 props의 한 예로, 태그 사이에 넣은 값을 children 이란 이름으로 보냄
  - 사용 예)
    - `<TodoList todos={todos}>테스트값</TodoList>` 처럼 태그 사이에 데이터를 넣음
    - 자식 컴포넌트에선 `const TodoList = ({todos, children}) => {...}` 처럼 비구조화 할당으로 값을 가져와서 사용

### state란?
- 컴포넌트에서 자체적으로 사용하는 값 (like 컴포넌트의 지역 변수)
- 현 예제인 함수형 컴포넌트에선 `const [변수명, set변수명] = useState(초기값);` 으로 선언하여 사용한다.
  - "`useState()` 함수를 실행시켜, 내가 사용할 변수와 setter를 반환받는다!"

### JSX에서 {}의 역할은?
- JSX 내에서 동적 데이터/로직/Javascript처리를 하기 위해 사용
  - 마치 JSP에서 Java코드를 쓰기 위해 스크립틀릿(`<%...%>`)을 사용하는 것과 같은 역할

### 왜 map을 사용할 땐, key props를 지정해야 할까?
- key를 지정하면 React에서 컴포넌트의 랜더링 여부(추가, 생성, 제거 등)를 탐색(인덱싱)하기 쉬워짐
- key를 지정하지 않으면, 모든 컴포넌트를 비교해야해서 성능 저하가 발생함