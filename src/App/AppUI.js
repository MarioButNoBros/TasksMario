import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { TodosError } from '../components/TodosError/TodosError';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>

            <TodoCounter completed={completedTodos} total={totalTodos} />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}



                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

        </React.Fragment>
    );
}

export { AppUI };