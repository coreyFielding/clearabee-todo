import TodoHeader from './components/todoHeader'
import TodoList from './components/todoList'
import TodoForm from './components/todoForm'
import React, {useEffect, useState} from 'react';
import classnames from 'classnames'

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
        if (todoItems.length === 0) {
            localStorage.clear()
        }
    }, [todoItems])

    const addTodo = (todo: ITodoItem) => {
      const {task, completed} = todo
      setTodoItems([...todoItems, {id: todoItems.length, task, completed}])
      localStorage.setItem('todos', JSON.stringify(todoItems))
    }
  const deleteTodo = (index: number) => {
      setTodoItems(todoItems.filter((item: ITodoItem) => item.id !== index))

      return localStorage.setItem('todos', JSON.stringify(todoItems))
  }

  const completeTodo = (index: number) => {
      let updateTodos = [...todoItems]
      const completeTodo = todoItems.findIndex((item: ITodoItem) => item.id === index)
      updateTodos[completeTodo].completed = updateTodos[completeTodo].completed ? false : true

      return setTodoItems([...updateTodos])
  }

  const todoPageClasses = classnames(
      "flex",
      "items-center",
      "justify-center",
      "h-screen",
      "text-center",
      "bg-gray-200"
  )

    const todoContainerClasses = classnames(
        "rounded-lg",
        "bg-white",
        "p-3",
        "w-1/5",
        "shadow-md"
    )

    const todosHeaderClasses = classnames(
        "border-0",
        "border-b",
        "border-gray-200",
        "mb-4",
        "font-bold"
    )

  return (
        <div className={todoPageClasses}>
            <div className={todoContainerClasses}>
                <div className={todosHeaderClasses}>
                    {!todoItems?.length ? (<h1>You have no tasks</h1>) :
                        (<TodoHeader todosCount={todoItems?.length}/>)
                    }
                </div>

                <div className="block">
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todoItems={todoItems} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
                </div>
            </div>
        </div>
  );
}
