export interface ITodoItem {
    id: number
    task: string
    completed: boolean
}

export interface ITodoItemProps {
    item: ITodoItem
    deleteTodo: (event: any) => void
    completeTodo: (event: any) => void
}

export interface IDeleteAllTodosButtonProps  {
    todoItems: ITodoItem[]
    deleteAllTodos: (event: any) => void
}

export interface ITodoListProps {
    todoItems: ITodoItem[]
    deleteTodo: (event: any) => void
    completeTodo: (event: any) => void
    deleteAllTodos: (event: any) => void
}