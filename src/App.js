import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';


const defaultTodos = [
  { text: 'Cortar', completed: true },
  { text: 'Realizar curso', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Eeeeeeeeeeeeeeeepa', completed: true }
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={5} total={8} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;