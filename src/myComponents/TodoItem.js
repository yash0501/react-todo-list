import React from 'react'

export const TodoItem = (props) => {
    return (
        <div className="col-md-4 my-3 py-1.5">
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <button className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}
