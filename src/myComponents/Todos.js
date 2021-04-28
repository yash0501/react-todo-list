import React from 'react'
import {TodoItem} from './TodoItem'
import {useState} from 'react'

export const Todos = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h3 className="my-3">Todo List</h3>
                {props.todos.length===0? "No todos to display": 
                    props.todos.map((todo)=>{
                        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                    })
                }
            </div>
        </div>
    )
}
