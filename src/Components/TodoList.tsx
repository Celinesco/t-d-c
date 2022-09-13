import './TodoList.css'
import { ToDo } from '../utils/todoType';
import SingleTodo from './SingleTodo';

interface Props {
    todoList: ToDo[];
    setTodoList: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {




    return (
        <div className="ul__todos">

            {todoList?.map(todo => (
                <div className='li__inidivual-todo' key={todo.id}>
                    <SingleTodo
                        todoId={todo.id}
                        todoText={todo.todo}
                        isDone={todo.isDone}
                        todoList={todoList}
                        setTodoList={setTodoList} />
                </div>

                // <div className='li__inidivual-todo' key={todo.id}>
                //     {todo.isDone ? <div className='todo__done'>{todo.todo}</div> :
                //         <div>{todo.todo}</div>}




                // </div>
            ))}

        </div>
    )
}

export default TodoList;


// si edit  input
