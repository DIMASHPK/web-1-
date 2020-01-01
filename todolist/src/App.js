import React from 'react';
import './App.css';
import {Search} from "./Search/Search";
import {ToDoList} from "./ToDoList/ToDoList";



export const Context = React.createContext()

function App() {

    let [todos, setTodos] = React.useState([
        {id: 1, completed: false, do:'Оплатить квартплату'},
        {id: 2, completed: false, do:'Позаниматься реактом'},
        {id: 3, completed: false, do:'сходить на стрижку'},
        {id: 4, completed: false, do:'сходить в спортзал'},
    ])

    let [searchValue, setSearchValue]= React.useState('')

    const search = (e)=>{
        setSearchValue(searchValue = e.target.value)
    }

    const select = (id)=>{
        setTodos(todos = todos.map( (todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
          return todo

        }))
    }

    const remove = (id) => {
        setTodos(todos = todos.filter((todo) => {
            if(id !== todo.id){
                return todo
            }
        }))
    }

    const addToDo = (todo) => {
        setTodos(todos = todos.concat(
        {id: todos.length+1, completed: false, do: todo},
        ))
    }


  return (
      <Context.Provider value={{
          remove,
          select,
          searchValue,
          search,
          addToDo
      }}>
          <div className="App">
              <h1>My to do list</h1>
              <Search
                  add={addToDo}/>
              {
                  todos.length ?
                      (
                          <ToDoList
                              todos={todos}
                              select={select}
                              remove={remove}
                          />
                      ) : (
                          <p>Нету задач!</p>
                      )
              }

          </div>
      </Context.Provider>
  );
}

export default App;
