import React from 'react'
import ITodoHeaderProps from "./types";

export default ({todosCount}: ITodoHeaderProps): JSX.Element => {
    return (
        <div className="my-3">
            <span>
                {todosCount === 1 ? `You have ${todosCount} task` : `You have ${todosCount} tasks`}
            </span>
        </div>
    )
}