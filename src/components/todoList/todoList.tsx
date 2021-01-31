import React from 'react'
import classnames from "classnames";

interface ITodoItem {
    item: {id: number, task: string, complete: boolean}
    deleteTodo: (event: any) => void
    completeTodo: (event: any) => void
}

const TodoItem = ({item, deleteTodo, completeTodo}: ITodoItem): JSX.Element => {
    const deleteItem = (id: number) => deleteTodo(id)
    const completeItem = (id: number) => completeTodo(id)

    const TodoItemClasses = classnames(
        "flex",
        "justify-between",
        "rounded-md",
        "border",
        "border-gray-200",
        "hover:shadow-lg",
        "hover:border-transparent",
        "duration-300",
        "p-3",
        "my-2",
        "gap-x-2"
    )

    return (
            <div className={TodoItemClasses}>
                <span className={item.complete ? 'line-through' : ''}>{item.task}</span>
                <button onClick={() => completeItem(item.id)}>Completed</button>
                <button onClick={() => deleteItem(item.id)}>delete</button>
            </div>
    )
}

export default (props: any) => {
    const {todoItems} = props

    const todoListClasses = classnames(
        "mt-4"
    )

    return (
        <div className={todoListClasses}>
            {
                todoItems?.length ? (
                    todoItems.map((item: any) => (
                        <TodoItem key={`${item.id}`} item={item} {...props}/>
                    ))
                ) : null
            }
        </div>
    )
}