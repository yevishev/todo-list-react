import React, { useState } from "react";

function App() {
  const [value, setValue] = useState('') 
  const [todos, setTodos] = useState([''])//не понял, почему сюда нельзя передавать пустой массив

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const clickHandler = () => {
    todos.push(value)
    setTodos(todos)
    setValue('')
  }

  const removeHandler = () => {
    setTodos([])
  }

  return (
    <>
      <input 
        type="text" 
        value={value}
        placeholder="Enter some todo"
        onChange={changeHandler}
      />

      <button onClick={clickHandler}>+</button>
      <button onClick={removeHandler}>remove all</button>
      <ul>
      {todos.map((val, k) => <li style={{listStyleType: 'none'}} key={k}>{val}</li>)}
      </ul>
    </>
  );
}

export default App;
