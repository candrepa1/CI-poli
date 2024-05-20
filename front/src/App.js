import React, { useEffect, useState } from 'react';
import './App.css';

const MAIN_URL = "http://localhost:8080/todos"

function App() {
  const [todos, setTodos] = useState([]);
  const [toAdd, setToAdd] = useState('');

  const getTodos = async () => {
    const result = await fetch(MAIN_URL);
    const todos = await result.json();
    setTodos(todos);
  }

  const createToDo = async () => {
    const result = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: toAdd, isDone: false})
  });
    if(result.status === 201) {
      getTodos();
    }
  }

  const markAsDone = async ({value, id}) => {
    const result = await fetch(`${MAIN_URL}/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({isDone: value})
    });
    if (result.status === 204) {
      getTodos();
    }
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <div>
          <input value={toAdd} onChange={(e) => setToAdd(e.target.value)}/>
          <button onClick={createToDo}>Add</button>
        </div>
        {todos.map(({id, name, isDone}) => <div key={id}>{name}<input type="checkbox" checked={isDone} onChange={(e) => markAsDone({value: e.target.value, id})} disabled={isDone}/></div>)}
      </header>
    </div>
  );
}

export default App;
