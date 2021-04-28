//import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header'
import {Footer} from './myComponents/Footer'
import {Todos} from './myComponents/Todos'
import {useState, useEffect} from 'react'
import {AddTodo} from './myComponents/AddTodo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = (todo)=>{
    console.log("I am ondelete of todo ", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, description)=>{
    console.log("I am adding todo", title, description);
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      description: description
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  return (
    <>
      <Header title="My ToDo List" links={["Home", "About"]}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
