import { useState } from 'react';
import { ToDo } from '../utils/todoType';
import { MdModeEditOutline, MdDelete, MdOutlineCheck } from 'react-icons/md'

interface Props {
    todoText: string;
    isDone: boolean;
    todoList: ToDo[];
    setTodoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
    todoId: string | number;
}


const InputUniqueToDo: React.FC<Props> = ({ todoText, isDone, todoList, setTodoList, todoId }) => {

    const handleEdit = (e: React.FormEvent, idSelected: string | number) => {
        e.preventDefault();

        const newArray: ToDo[] = todoList.map((todo) =>
            todo.id === idSelected ? { ...todo, todo: editTodo } : todo
        )
        setTodoList(newArray)
        setEdit(false)
    }

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>('')


    const handleCheck = (idSelected: string | number) => {
        const newArray: ToDo[] = todoList.map((todo) =>
            todo.id === idSelected ? { ...todo, isDone: !todo.isDone } : todo
        )
        setTodoList(newArray)
    }

    const handleDelete = (idSelected: string | number) => {
        const newArray: ToDo[] = todoList.filter(todo => todo.id !== idSelected)
        setTodoList(newArray)
    }
    return (
        <>
            <form onSubmit={(e) => handleEdit(e, todoId)}>
                {edit ? <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} type='text'></input> :
                    <div className={isDone ? 'todo__done' : ''}>{todoText}</div>}
            </form>
            <div className='todo__actions'>
                <button disabled={isDone} onClick={() => {
                    setEdit(true)
                    setEditTodo(todoText);
                }}><MdModeEditOutline /></button>
                <button onClick={() => handleDelete(todoId)}><MdDelete /></button>
                <button onClick={() => handleCheck(todoId)}><MdOutlineCheck /></button>
            </div>

        </>

    )
}

export default InputUniqueToDo;