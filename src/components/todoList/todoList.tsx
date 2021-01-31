import React from 'react'
import {ITodoItem, ITodoListProps, ITodoItemProps, IDeleteAllTodosButtonProps} from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import {TodoItemClasses, todoListClasses} from "./todoListStyles";

const TodoItem = ({item, deleteTodo, completeTodo}: ITodoItemProps): JSX.Element => {
    const deleteItem = (id: number) => deleteTodo(id)
    const completeItem = (id: number) => completeTodo(id)

    return (
        <div>
            <div className={TodoItemClasses}>
                <span className={item.completed ? 'line-through' : ''}>{item.task}</span>
                <div className="w-1/5 flex justify-between">
                    <button onClick={() => completeItem(item.id)} className="focus:outline-none">
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="hover:text-green-500 focus:outline-none"
                            style={{color: `${item.completed ? 'LightGreen' : ''}`}}
                        />
                    </button>
                    <button onClick={() => deleteItem(item.id)} className="focus:outline-none">
                        <FontAwesomeIcon icon={faTimes} className="hover:text-red-500"/>
                    </button>
                </div>
            </div>
            {
                item.completed && (
                    <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-400 text-white rounded-md p-3 py-2 my-3 w-full hover:bg-red-600">
                        Remove task?
                    </button>
                )
            }

        </div>

    )
}

const DeleteAllButton = ({todoItems, deleteAllTodos}: IDeleteAllTodosButtonProps): JSX.Element => {
    return (
        <>
            {
                todoItems?.length > 1 ? <button onClick={(e) => deleteAllTodos(e)} className="bg-red-500 rounded-md text-white p-3 py-2 my-2">Remove all</button> : null
            }
        </>
    )
}

export default (props: ITodoListProps): JSX.Element => {
    const {todoItems, deleteTodo, deleteAllTodos, completeTodo} = props

    return (
        <div className={todoListClasses}>
            {
                todoItems?.length ? (
                    todoItems.map((item: any) => (
                        <TodoItem
                            key={`${item.id}`}
                            item={item}
                            deleteTodo={deleteTodo}
                            completeTodo={completeTodo}
                        />
                    ))
                ) : null
            }
            <DeleteAllButton
                todoItems={todoItems}
                deleteAllTodos={deleteAllTodos}
            />
        </div>
    )
}