'use client';

import { useRef, useState } from "react";



const initailTodos = [
  {
    id: 1,
    name: "Calculus HW2",
    done: false,
  },
  {
    id: 2,
    name: "Side Project Figma",
    done: false,
  },
  {
    id: 3,
    name: "Course Slide",
    done: false,
  },
  {
    id: 4,
    name: "Write Blog Post",
    done: true,
  },
  {
    id: 5,
    name: "Test",
    done: true,
  },
];

export default function Home() {

  const inputRef = useRef(null);
  const [todos, setTodos] = useState(initailTodos);

  function Todo({ todo }) {
    return (
      <div className="bar">
        <button className={`${todo.done ? "YDone" : "NDone"}`} onClick={() => {
          const newTodos = todos.map((t) => {
            if(t.id == todo.id) {
              return {
                ...t,
                done: !t.done,
              }
            }
            return t
          });
          setTodos(newTodos);
        }}></button>
        <div className={`${todo.done ? "Ything" : "Nthing"}`}>

          {todo.name}

        </div>
      </div>
    )
  }

  return (
    <div className="blackground">
      <p ID="todo">TODO</p>
      <div className="inputbar">
        <button className="Plus" onClick={() => {
          console.log(inputRef.current.value);
          setTodos([{
            id: todos.length+1,
            name: inputRef.current.value,
            done: false,
          }, ...todos])
          inputRef.current.value = '';
        }}><p className="PP">+</p>
        </button>
        <input 
        ref={inputRef} 
        type="text" 
        placeholder="Create a new todo ..." 
        className="input" />

      </div>

      <div className="list">

        {todos.map((todo) =>(
          <Todo todo={todo} key={todo.id}/>
        ))}
      </div>
    </div>
  );
}