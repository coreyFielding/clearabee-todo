import React from 'react'
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

it('renders parent container', () => {
    act(() => {
        ReactDOM.render(<App />, container)
    })

    const parent = container.querySelector('div')
    expect(parent).toBeInTheDocument()
})
