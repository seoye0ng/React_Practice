import React, { useState } from 'react';
import List from './List';

const App = () => {
  const [todoList, setTodoList] = useState(['1', '2', '3']);
  const [inputValue, setInputValue] = useState('');

  function handleSetInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleSetList() {
    setTodoList([...todoList, inputValue]);
  }

  return (
    <>
      <ul>
        {todoList.map((index) => {
          return <List num={index} />;
        })}
      </ul>
      <input type="text" value={inputValue} onChange={handleSetInputValue} />
      <button onClick={handleSetList}>추가</button>
    </>
  );
};

export default App;
