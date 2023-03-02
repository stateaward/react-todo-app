import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

export default function TodoInsert() {
  return (
    <form className='TodoInsert'>
        <input placeholder='할일을 입력하세요' />
        <button type="submit">
            <MdAdd />
        </button>
    </form>
  )
}