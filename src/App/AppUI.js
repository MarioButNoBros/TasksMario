import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { TodosError } from '../components/TodosError/TodosError';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { Modal } from '../components/Modal/Modal';
import { TodoForm } from '../components/TodoForm/TodoForm';
import { TodoContext } from '../components/TodoContext/TodoContext';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TodoCounter />
            <TodoSearch />


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


            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}


        </React.Fragment>
    );
}

export { AppUI };