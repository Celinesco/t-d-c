import './InputField.css'
import { useRef } from 'react'

interface Props {
    newToDo: string;
    setNewTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ newToDo, setNewTodo, handleSubmit }) => {

    const inputToDo = useRef<HTMLInputElement>(null)

    return (
        <form className='form'>
            <input
                ref={inputToDo}
                className='input'
                type='text'
                value={newToDo}
                onChange={
                    (e) => setNewTodo(e.target.value)
                }
            ></input>
            <button onClick={(e) => {
                handleSubmit(e);
                inputToDo.current?.blur();
            }}
                className='button__input'
                type='submit'>OK</button>
        </form >

    )
}

export default InputField;