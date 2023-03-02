import React, { useState } from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      {/* 1) TodoList에게 todos라는 이름으로 위 값(상태)를 전송 */}
      <TodoList todos={todos}>Footer 영역</TodoList>
    </TodoTemplate>
  );
}

export default App;
