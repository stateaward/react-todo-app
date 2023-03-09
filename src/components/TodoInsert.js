import {useState, useCallback} from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

export default function TodoInsert( {onInsert} ) {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  // onClick도 가능하지만, submit은 키보드 엔터도 감지함
  const onSubmit = useCallback((e)=>{
    onInsert(value);
    setValue('');

    // submit 고유 동작(브라우저 새로고침) 방지
    e.preventDefault();
  }, [onInsert, value]);

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
        <input placeholder='할일을 입력하세요'
               value={value}
               onChange={onChange}
        />
        <button type="submit">
            <MdAdd />
        </button>
    </form>
  )
}