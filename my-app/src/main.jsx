import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greeting, UserCard} from './Greeting'
import Product, {Navbar} from './Product'

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(root)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Greeting tittle="Hello"/>
        <Greeting name="Kevin"/>
        <Greeting apellido="Gutierrez"/>
        <UserCard/>
        <Product/>
        <Navbar/>
    </>
)