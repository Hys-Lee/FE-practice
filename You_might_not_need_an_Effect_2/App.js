import { useState, useEffect, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './todos.js';


export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');

  /*
    이렇게 useMemo안쓴다면,
    visibleTodos를 쓸데없이 render에 참여시키는 나머지 state인
    text와 이를 필요로 하는 jsx부분을 따로 떼어내서 Component로 만들면 됨.
    그럼 서로 text가 update되는 거에는 이 Component만 re-render하면 됨.
  */
  
  const visibleTodos = useMemo(()=>{
    return getVisibleTodos(todos, showActive);
  }, [todos, showActive]);
  
  

  function handleAddClick() {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
