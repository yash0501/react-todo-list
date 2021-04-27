//import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header'
import {Footer} from './myComponents/Footer'
import {Todos} from './myComponents/Todos'

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      description: "Get kadha and vegetables"
    },
    {
      sno: 2,
      title: "Go to gym",
      description: "Do exercise"
    },
    {
      sno: 3,
      title: "Water Plants",
      description: "Water all plants before playing badminton"
    }
  ]
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo ", todo);
  }
  return (
    <>
      <Header title="My ToDo List" links={["Home", "About"]}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
