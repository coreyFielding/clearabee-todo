import React from 'react'
import ITodoHeaderProps from "./types";

export default ({todosCount}: ITodoHeaderProps): JSX.Element => {
    return (
        <div>
            <span>
                {todosCount === 0 ? `You have ${todosCount} task` : `You have ${todosCount} tasks`}
            </span>
        </div>
    )
}