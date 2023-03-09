import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'
import cn from 'classnames'   // 조건부 랜더링을 쉽게 하기 위함
import './TodoListItem.scss';

export default function TodoListItem({ todo, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <div className='TodoListItem'>
        <div className={cn('checkbox', {checked})}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className='text'>{text}</div>
        </div>        
        <div className='remove' onClick={()=>onRemove(id)}>
            <MdRemoveCircleOutline />
        </div>
    </div>
  )
}
