import React from 'react'
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TodoForm from './todoForm';

let container;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

it('renders form', () => {
    act(() => {
        ReactDOM.render(<TodoForm />, container)
    })

    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
})