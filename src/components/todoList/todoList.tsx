import React from 'react'
import {ITodoListProps, ITodoItemProps} from "./types";
import classnames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({item, deleteTodo, completeTodo}: ITodoItemProps): JSX.Element => {
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
        <div>
            <div className={TodoItemClasses}>
                <span className={item.completed ? 'line-through' : ''}>{item.task}</span>
                <div className="w-1/5 flex justify-between">
                    <button onClick={() => completeItem(item.id)}>
                        <FontAwesomeIcon icon={faCheckCircle} className="hover:text-green-500" style={{color: `${item.completed ? 'green' : ''}`}} />
                    </button>
                    <button onClick={() => deleteItem(item.id)}>
                        <FontAwesomeIcon icon={faTimes} className="hover:text-red-500" />
                    </button>
                </div>
            </div>
            {
                item.completed && (
                    <button onClick={() => deleteItem(item.id)} className="bg-red-400 text-white rounded-md p-3 py-2 w-full hover:bg-red-600">Remove task?</button>
                )
            }

        </div>

    )
}

export default (props: ITodoListProps): JSX.Element => {
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