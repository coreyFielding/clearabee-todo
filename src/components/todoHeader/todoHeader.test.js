import React from 'react'
import { render, screen } from '@testing-library/react'
import TodoHeader from './todoHeader';

let container;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

it('renders todo count', () => {
    render(<TodoHeader todosCount={1}/>)

    const count = container.querySelector('span')
    expect(screen.getByText('You have 1 task')).toBeVisible()
})