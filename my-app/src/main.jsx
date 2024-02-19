import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greeting, UserCard} from './Greeting'
import Product, {Navbar} from './Product'

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(root)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <UserCard 
            name="Kevin" 
            amount={20000} 
            married={false} 
            point={[99, 33.3, 22.1]} 
            address={{street: '777 Main Street', city: 'Peru'}}
            greet={function () { alert('Hello')}}
        />
    </>
)