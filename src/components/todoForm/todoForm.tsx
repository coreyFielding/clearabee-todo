import React, {useState} from 'react'
import {ITodoInputProps, ITodoSubmitProps, ITodoFormProps} from "./types";
import {todoInputClasses, todoSubmitClasses, todoFormClasses} from "./todoFormStyles";

const TodoInput = ({todo, setTodo}: ITodoInputProps): JSX.Element => (
    <input
        type="text"
        value={todo}
        placeholder="I need to..."
        onChange={(e) => setTodo(e.target.value)}
        className={todoInputClasses}
        data-testid="todo-input"
    />
)

const TodoSubmit = ({todo}: ITodoSubmitProps): JSX.Element => (
    <button type="submit" className={todoSubmitClasses} disabled={!todo}>Add todo</button>
)

export default ({addTodo, todoCount}: ITodoFormProps): JSX.Element => {
    const [todo, setTodo] = useState<string | any>('')

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        addTodo({id: todoCount, task: todo, completed: false})
        setTodo('')
    }

    return (
        <div className={todoFormClasses}>
            <form onSubmit={handleSubmit}>
                <TodoInput todo={todo} setTodo={setTodo} />
                <TodoSubmit todo={todo}/>
            </form>
        </div>
    )
}