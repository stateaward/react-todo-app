import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 환경 셋팅하기',
      checked: true,
    },
    {
      id: 2,
      text: 'git에 업로드 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 앱 만들기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  // 자식에게 전달하는 함수는 useCallback을 써서 리소스 낭비 방지
  // 자식 컴포넌트에서 onInsert를 실행 -> App.js의 setTodos를 트리거 -> App.js의 state 값 업데이트 -> 재랜더링
  const onInsert = useCallback((text)=>{
    console.log('onInsert : ', text);
    console.log('nextId.current : ', nextId.current);
    const todo = {
      id : nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  return (
    <TodoTemplate>
      {/* TodoInsert에게 onInsert 함수를 useCallback으로 감싸서 전달 */}
      <TodoInsert onInsert={onInsert} />
      {/* 1) TodoList에게 todos라는 이름으로 위 값(상태)를 전송 */}
      <TodoList todos={todos}>Footer 영역</TodoList>
    </TodoTemplate>
  );
}

export default App;
