import React, {useState} from 'react'
import {ITodoInputProps, ITodoSubmitProps, ITodoFormProps} from "./types";
import classnames from 'classnames'

const TodoInput = ({todo, setTodo}: ITodoInputProps): JSX.Element => {
    const todoInputClasses = classnames(
        "block",
        "border-2",
        "border-gray-200",
        "rounded-md",
        "pl-3"
    )

    return (
        <input type="text" value={todo} placeholder="I need to..." onChange={(e) => setTodo(e.target.value)} className={todoInputClasses}/>
    )
}

const TodoSubmit = ({todo}: ITodoSubmitProps): JSX.Element => {
    const todoSubmitClasses = classnames(
        "block",
        "text-center",
        "border-2",
        "border-black",
        "w-full",
        "rounded-md",
        "mt-2",
        "border-indigo-500",
        "text-indigo-600",
        "hover:shadow-lg",
        "hover:border-indigo-500",
        "hover:bg-indigo-500",
        "hover:text-white",
        "duration-300"
    )
    return (
        <button type="submit" className={todoSubmitClasses} disabled={!todo}>Add todo</button>
    )
}

export default ({addTodo}: ITodoFormProps): JSX.Element => {
    const [todo, setTodo] = useState<string | any>('')

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        addTodo({task: todo, completed: false})
        setTodo('')
    }

    const todoFormClasses = classnames(
        "flex",
        "justify-center",
    )

    return (
        <div className={todoFormClasses}>
            <form onSubmit={handleSubmit}>
                <TodoInput todo={todo} setTodo={setTodo} />
                <TodoSubmit todo={todo}/>
            </form>
        </div>
    )
}