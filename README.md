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

### useCallback();
- `useCallback(함수, [검사값])` 검사값이 변경되었을 때에만 함수를 생성하는 Hook이다.
- 함수를 memoize -> 재사용하기 위해서 사용(랜더링 성능 최적화)
- 검사값에 따른 랜더링 비교
  - `[]` : 검사값이 비어있으므로, 최초 랜더링시에만 함수를 선언하고 이후 계속 재사용한다
  - `[number]` : number 값이 변경되었을 떄에만, 함수를 다시 선언
- 사용 이유
  - 자식 컴포넌트에게 props로 함수를 전달할 때 사용 -> 자식 컴포넌트의 불필요한 랜더링을 방지
  - 함수 변경이 없거나, 연산이 큰 함수를 최초에만 선언하기 위해서 사용

### useCallback()과 useEffect()의 차이
- useCallback : 콜백함수를 자식에게 전달해줄 때 사용 / 자주 렌더링 위험이 있는 요소를 성능 최적화를 위해 사용
  - `const onChange = useCallback(e => {...});`
- useEffect : API 통신(data fetch), 이벤트 리스너 추가, DOM 업데이트 등 -> 사이드 이펙트 방지를 위해 사용
  - `useEffect(()=>{...});` 함수 호출!

### useEffect(), 넌 무엇이니?
- 사이드 이펙트를 방지하기 위해서 사용함
- 상세 사례
  - API Fetching : 컴포넌트 내에 axios를 선언해놓았는데, 해당 컴포넌트가 부모에 의해 계속 재랜더링된다면? 불필요한 api 요청이 계속 반복됨(side effect 발생)
  - 이벤트 리스너 추가/제거 : 컴포넌트 마운트 될 때, 이벤트 추가하고. 해제될 때 이벤트 제거를 위해서
  - DOM 업데이트 시 처리 등

