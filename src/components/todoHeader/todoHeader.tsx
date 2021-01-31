import React from 'react'

export default ({todosCount}: any): JSX.Element => {
    return (
        <div>
            <span>
                {todosCount?.length === 0 ? `You have ${todosCount} task` : `You have ${todosCount} tasks`}
            </span>
        </div>
    )
}