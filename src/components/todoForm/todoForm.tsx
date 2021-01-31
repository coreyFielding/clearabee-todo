import React, {useState} from 'react'
import classnames from 'classnames'

type TodoFormProps = {
    addTodo: (event: any) => void
}

const TodoInput = ({todo, setTodo}: any) => {
    const todoInputClasses = classnames(
        "block",
        "border-2",
        "border-gray-200",
        "rounded-md",
        "pl-3"
    )

    return (
        <input type="text" value={todo} placeholder="Start typing..." onChange={(e) => setTodo(e.target.value)} className={todoInputClasses}/>
    )
}

const TodoSubmit = ({todo}: any) => {
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

export default ({addTodo}: TodoFormProps): JSX.Element => {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addTodo({task: todo, complete: false})
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
                <TodoSubmit todo={todo} addTodo={addTodo} setTodo={setTodo}/>
            </form>
        </div>
    )
}