import TodoHeader from '../todoHeader'
import TodoList from '../todoList'
import TodoForm from '../todoForm'
import {todoPageClasses, todosHeaderClasses, todoContainerClasses} from "./appStyles";
import React, {useEffect, useState} from 'react';

interface ITodoItem {
    id: number
    task: string
    completed: boolean
}

export default () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[] | any>([])

    useEffect(() => {
        const cachedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodoItems(cachedTodos)
    }, [])

    useEffect(() => {
        if (!todoItems.length) {
            localStorage.clear()
        }
    }, [todoItems])

    const addTodo = (todo: ITodoItem) => {
      const arr = JSON.parse(localStorage.getItem('todos') || '[]')
      arr.push({...todo})
      localStorage.setItem('todos', JSON.stringify(arr))
      setTodoItems([...todoItems, {...todo}])
    }

    const deleteTodo = (index: number) => {
      setTodoItems(todoItems.filter((item: ITodoItem) => item.id !== index))
      localStorage.setItem('todos', JSON.stringify(todoItems))
    }

    const deleteAllTodos = () => {
        setTodoItems([])
        localStorage.clear()
    }

    const completeTodo = (index: number) => {
      let updateTodos = [...todoItems]
      const completeTodo = todoItems.findIndex((item: ITodoItem) => item.id === index)
      updateTodos[completeTodo].completed = updateTodos[completeTodo].completed ? false : true

      return setTodoItems([...updateTodos])
    }

  return (
        <div className={todoPageClasses}>
            <div className={todoContainerClasses}>
                <div className={todosHeaderClasses}>
                    {!todoItems?.length ? (<span className="my-3">You have no tasks</span>) :
                        (<TodoHeader todosCount={todoItems?.length}/>)
                    }
                </div>

                <div className="block">
                    <TodoForm addTodo={addTodo} todoCount={todoItems.length}/>
                    <TodoList
                        todoItems={todoItems}
                        deleteTodo={deleteTodo}
                        deleteAllTodos={deleteAllTodos}
                        completeTodo={completeTodo}
                    />
                </div>
            </div>
        </div>
  );
}
