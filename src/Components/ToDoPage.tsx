import React, { useState } from 'react';
import { ToDo } from '../utils/todoType';
import InputField from "./InputField";
import TodoList from "./TodoList";
import { v4 } from 'uuid';
import '../App.css'



const WelcomePage: React.FC = () => {
    const [newToDo, setNewTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<ToDo[]>([]);


    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();

        setTodoList([...todoList, { id: v4(), todo: newToDo, isDone: false }])
        setNewTodo('')

    }

    return (
        <div className='App'>
            <h1 className='h1__title'>Todo list</h1>
            <InputField
                newToDo={newToDo}
                setNewTodo={setNewTodo}
                handleSubmit={handleSumbit} />
            <TodoList
                todoList={todoList}
                setTodoList={setTodoList} />
        </div>
    )
}

export default WelcomePage;