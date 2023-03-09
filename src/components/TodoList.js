import TodoListItem from './TodoListItem'
import './TodoList.scss'

// todos를 props로 받아옴
export default function TodoList({ todos, children, onRemove }) {
  return (
    <div className='TodoList'>
      {/* JSX 안에 자바스크립트 코드를 넣기 위해 {} 사용 */}
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
      <b>{children}</b>
    </div>
  )
}