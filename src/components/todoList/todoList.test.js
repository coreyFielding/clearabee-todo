import React from 'react'
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TodoList from './todoList';

let container;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

it('renders component', () => {
    act(() => {
        ReactDOM.render(<TodoList />, container)
    })

    const component = container.querySelector('div')
    expect(component).toBeInTheDocument()
})