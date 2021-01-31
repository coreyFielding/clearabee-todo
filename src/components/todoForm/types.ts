export interface ITodoInputProps {
    todo: string
    setTodo: (event: any) => void
}

export interface ITodoSubmitProps {
    todo: {
        task: string
        completed: boolean
    }
}

export interface ITodoFormProps {
    addTodo: (event: any) => void
}